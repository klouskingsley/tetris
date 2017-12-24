import getEleInfo from './getEleInfo'

export default isCollided

function isCollided (ele, containerData) {
    var type = ele.type
    var shapeType = ele.shapeType
    var info = getEleInfo(type, shapeType)
    var top = ele.bottom - info.height
    var left = ele.left

    var i
    var j

    for (i = 0; i < info.width; i++) {
        for (j = 0; j < info.height; j++) {
            if (info.data[i][j] && containerData[left + i][top + j]) {
                return true
            }
        }
    }

    return false
}
