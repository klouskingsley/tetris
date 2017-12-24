import getRandomEleTypeShapeType from './getRandomEleTypeShapeType'
import getEleInstance from './getEleInstance'
import getEleInfo from './getEleInfo'

export default getRandomEle

function getRandomEle (size) {
    var shapeObj = getRandomEleTypeShapeType()

    var type = shapeObj.type
    var shapeType = shapeObj.shapeType

    var instance = getEleInstance(type, shapeType, size)
    var left = 5 - Math.ceil(getEleInfo(type, shapeType).width / 2)

    var ret = {
        type: type,
        shapeType: shapeType,
        left: left,
        bottom: 0,
        instance: instance,
        updateTimeElapsed: 0
    }

    return ret
}
