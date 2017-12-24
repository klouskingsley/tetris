import getEleInfo from '../utils/getEleInfo'

import Cell from './cell'

export default Ele

function Ele (type, shapeType) {
    var info = getEleInfo(type, shapeType)

    var key = '' + type + shapeType
    if (Ele.instance[key]) {
        return Ele.instance[key]
    }

    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')

    canvas.setAttribute('width', info.width * 20)
    canvas.setAttribute('height', info.height * 20)

    for (var i = 0; i < info.data.length; i++) {
        for (var j = 0; j < info.data[i].length; j++) {
            info.data[i][j] && ctx.drawImage(new Cell, i * 20, j * 20)
        }
    }

    Ele.instance[key] = canvas
    
    return canvas
}

Ele.instance = []


