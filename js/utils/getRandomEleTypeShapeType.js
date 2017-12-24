export default getRandomEleTypeShapeType

function getRandomEleTypeShapeType () {
    var type = random(0, 6)
    var shapeType

    if (type === 0) {
        shapeType = 0
    }

    if (type === 1 || type === 3 || type === 4) {
        shapeType = random(0, 3)
    }

    if (type === 2 || type === 5 || type === 6) {
        shapeType = random(0, 1)    
    }

    return {
        type: type,
        shapeType: shapeType
    }
}

function random (min, max) {
    return min + Math.round(Math.random() * (max - min))
}
