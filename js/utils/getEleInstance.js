import Ele from '../render/ele'

export default getEleInstance

function getEleInstance (type, shapeType, size) {
    return new Ele(type, shapeType, size)
}
