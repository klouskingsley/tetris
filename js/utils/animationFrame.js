var raf = getRaf()
var caf = getCaf()

export {
    raf,
    caf
}

function getRaf () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        window.oRequestAnimationFrame || 
        window.msRequestAnimationFrame ||
        function (callback) {
            return setTimeout(function () {
                callback()
            }, 1000 / 16)
        }
}

function getCaf () {
    return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        function (rid) {
            return clearTimeout(rid)
        }
}
