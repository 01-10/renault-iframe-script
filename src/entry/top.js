import { replaceAllAutomagically, replaceIframe } from '../implementation/server'

(function () {

    replaceAllAutomagically()
    document.addEventListener('DOMContentLoaded', () => replaceAllAutomagically())
    window.addEventListener('load', () => replaceAllAutomagically())

})()

window.RenaultTopFrame = {
    forwardParameters: replaceIframe,
}
