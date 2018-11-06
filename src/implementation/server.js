import { REPLACEABLE_IFRAME_PREFIX } from './common'

function split(string, delimiter) {
    const pos = string.indexOf(delimiter)
    if (pos === -1) {
        return [string, undefined]
    } else {
        return [
            string.substring(0, pos),
            string.substring(pos + delimiter.length),
        ]
    }
}

function getParameters(queryString = location.search) {
    const parameters = {}

    queryString.split(/[&?]/g)
            .forEach(part => {
                if (part.length === 0) {
                    return
                }

                const [name, value] = split(part, '=')
                parameters[name] = value
            })

    return parameters
}

function appendParameters(url, parameters) {
    const [query, hash] = split(url, '#')
    const [path, queryString] = split(query, '?')

    let newQueryString = queryString || ''

    for (let name in parameters) {
        if (parameters.hasOwnProperty(name)) {
            if (newQueryString.length > 0) {
                newQueryString += '&'
            }
            newQueryString +=
                    encodeURIComponent(name) + '=' + encodeURIComponent(parameters[name])
        }
    }

    let newURL = path
    if (newQueryString.length > 0) {
        newURL += '?' + newQueryString
    }
    if (hash && hash.length > 0) {
        newURL += '#' + hash
    }

    return newURL
}

function overwriteParameters(url, parameters, allowed = undefined) {
    console.log(allowed)
    if (allowed) {
        const filteredParameters = {}
        for (let key in parameters) {
            if (parameters.hasOwnProperty(key) && allowed.indexOf(key) > -1) {
                filteredParameters[key] = parameters[key]
            }
        }

        return appendParameters(url, filteredParameters)
    } else {
        return appendParameters(url, parameters)
    }
}

function replaceIframe(iframe, targetURL, allowedParameters = undefined) {
    const newIframe = document.createElement('iframe')

    for (let attribute of iframe.attributes) {
        if (attribute.name !== 'src') {
            newIframe.setAttribute(attribute.name, attribute.value)
        }
    }

    newIframe.setAttribute('src', overwriteParameters(targetURL, getParameters(), allowedParameters))

    iframe.parentNode.replaceChild(newIframe, iframe)
}

function replaceAutomagically(iframe, allowedParameters = undefined) {
    const src = iframe.getAttribute('src')
    const [, destinationURL] = split(src, REPLACEABLE_IFRAME_PREFIX)

    replaceIframe(iframe, destinationURL, allowedParameters)
}

function replaceAllAutomagically(allowedParameters = undefined) {
    console.log('call', document.getElementsByTagName('iframe'))
    Array.prototype.forEach.call(document.getElementsByTagName('iframe'), iframe => {
        console.log(iframe)
        if (iframe.hasAttribute('src') && iframe.getAttribute('src').indexOf(REPLACEABLE_IFRAME_PREFIX) > -1) {
            replaceAutomagically(iframe, allowedParameters)
        }
    })
}

export {
    replaceIframe,
    replaceAutomagically,
    replaceAllAutomagically,
}
