import isCollided from './isCollided'
import getEleInfo from './getEleInfo'

export default getNextShapeRect

function getNextShapeRect (ele, container) {

    if (ele.type === 0) {
        return {
            shapeType: 0,
            left: ele.left
        }
    }

    var nextShapeType = getNextShapeType(ele.type, ele.shapeType)
    var nextInfo = getEleInfo(ele.type, nextShapeType)
    var preInfo = getEleInfo(ele.type, ele.shapeType)


    var preCenter = Math.ceil(preInfo.width / 2) - 1
    var nextCenter = Math.ceil(nextInfo.width / 2) - 1

    var maxStep = Math.max(preInfo.width, nextInfo.width) - 1

    var left = preCenter - nextCenter + ele.left

    for (var i = 0; i <= maxStep; i++) {

        var ele1 = {
            type: ele.type,
            shapeType: nextShapeType,
            left: left + i,
            bottom: ele.bottom
        }

        var ele2 = {
            type: ele.type,
            shapeType: nextShapeType,
            left: left - i,
            bottom: ele.bottom
        }

        if (ele1.left >= 0 && (ele1.left + nextInfo.width <= 10) && !isCollided(ele1, container.data)) {
            left = ele1.left
            break
        }

        if (ele2.left >= 0 && (ele2.left + nextInfo.width <= 10) && !isCollided(ele2, container.data)) {
            left = ele2.left
            break
        }
    }

    if (i < maxStep + 1) {
        return {
            shapeType: nextShapeType,
            left: left
        }
    }

    return {
        shapeType: ele.shapeType,
        left: ele.left
    }
}


function getNextShapeType (type, shapeType) {
    if (type === 0) {
        return 0
    }

    if (type === 1 || type === 3 || type === 4) {
        return (shapeType + 1) % 4
    }

    if (type === 2 || type === 5 || type === 6) {
        return (shapeType + 1) % 2
    }
}
