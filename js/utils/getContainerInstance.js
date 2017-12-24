import Cell from '../render/cell'

export default getContainerInstance

function getContainerInstance (arr, size) {
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    
    canvas.setAttribute('width', arr.length * size)
    canvas.setAttribute('height', arr[0].length * size)

    var i
    var j

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            arr[i][j] && ctx.drawImage(new Cell(size), i * size, j * size)
        }
    }

    return canvas
}
