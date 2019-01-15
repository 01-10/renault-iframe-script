import { MESSAGE_PREFIX } from '../implementation/common'

(function () {

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

    function applyGlobalStyles() {
        const style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = '.content-zone .grid-row.bleed { max-width: auto !important; }'
        document.querySelector('head').appendChild(style)
    }

    function setHeight(iframe, height) {
        iframe.style.height = height + 'px'
    }

    function setScroll(iframe, position, animate) {
        const floatingMenu = $('.docked-nav-outer')
        const hasFloatingMenu = floatingMenu.get(0)

        let scrollTo
        if (position === -1) {
            scrollTo = 0
        } else {
            scrollTo = $(iframe).position().top + position

            const floatingMenuBreakpoint = $('header').outerHeight()
            if (hasFloatingMenu && scrollTo > floatingMenuBreakpoint) {
                scrollTo -= floatingMenu.outerHeight()
            }
        }

        $('html, body')[animate ? 'animate' : 'prop']({
            scrollTop: Math.max(0, scrollTo),
        })
    }

    function findIframe(sourceWindow) {
        for (let iframe of document.querySelectorAll('iframe')) {
            if (iframe.contentWindow === sourceWindow) {
                return iframe
            }
        }
    }

    function messageHandler({ data, source }) {
        if (typeof data !== 'string' || data.substring(0, 6) !== MESSAGE_PREFIX) {
            return
        }

        const json = JSON.parse(data.substring(MESSAGE_PREFIX.length))
        const iframe = findIframe(source)
        switch (json.type) {
            case 'ping':
                source.postMessage('pong|' + JSON.stringify({
                    url: location.href,
                }), '*')
                break
            case 'height':
                setHeight(iframe, json.height)
                break
            case 'scroll':
                setScroll(iframe, json.position, json.animate)
                break
        }
    }

    applyGlobalStyles()
    window.addEventListener('message', messageHandler)

})()
