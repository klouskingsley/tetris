import getEleInfo from './getEleInfo'

export default isCollideing

function isCollideing (ele, containerData) {
    var bottom = ele.bottom
    var left = ele.left
    var type = ele.type
    var shapeType = ele.shapeType
    var info = getEleInfo(type, shapeType)
    var top = bottom - info.height

    var i
    var j

    if (bottom === 20) {
        return true
    }

    for (i = 0; i < info.width; i++) {
        for (j = 0; j < info.height; j++) {

            if (info.data[i][j] && containerData[i + left][top + j + 1]) {
                return true
            }
        }
    }

    return false
}

