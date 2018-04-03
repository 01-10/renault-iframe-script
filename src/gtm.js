import { MESSAGE_PREFIX } from './common'

(function () {

    let iframe

    if (window[MESSAGE_PREFIX + '_init']) {
        return
    }
    window[MESSAGE_PREFIX + '_init'] = true

    const jsFrameDetectionInterval = setInterval(() => {
        const iframe = document.querySelector('iframe[src*=\'javascript:\']')
        if (iframe) {
            iframe.parentNode.removeChild(iframe)
            clearInterval(jsFrameDetectionInterval)
        }
    }, 330)

    function getIframe() {
        if (iframe === undefined) {
            iframe = document.querySelector('.section.iframe iframe')

            ;['t', 'webkitT', 'msT', 'mozT', 'oT'].forEach(function (prefix) {
                iframe.style[prefix + 'ransition'] = 'none'
            })

            const style = document.createElement('style')
            style.type = 'text/css'
            style.innerHTML = '.content-zone .grid-row.bleed { max-width: auto !important; }'
            document.querySelector('head').appendChild(style)
        }

        return iframe
    }

    function setHeight(height) {
        iframe.style.height = height + 'px'
    }

    function setScroll(position, animate) {
        $('html, body')[animate ? 'animate' : 'prop']({
            scrollTop: position >= 0
                    ? $(getIframe()).position().top + position
                    : 0,
        })
    }

    function messageHandler({ data, source }) {
        if (data.substring(0, 6) !== MESSAGE_PREFIX) {
            return
        }

        const json = JSON.parse(data.substring(MESSAGE_PREFIX.length))
        switch (json.type) {
            case 'ping':
                if (getIframe()) {
                    source.postMessage('pong', '*')
                }
                break
            case 'height':
                setHeight(json.height)
                break
            case 'scroll':
                setScroll(json.position, json.animate)
                break
        }
    }

    window.addEventListener('message', messageHandler)

})()
