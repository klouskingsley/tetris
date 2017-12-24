function Cell (size) {
    size = size || 20
    
    if (Cell.instance[size]) {
        return Cell.instance[size]
    } 
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    
    canvas.setAttribute('width', size)
    canvas.setAttribute('height', size)

    ctx.beginPath()
    ctx.rect(0, 0, size - 2, size - 2)
    ctx.strokeStyle = '#00eb00'
    ctx.fillStyle = '#008000'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fill()
    Cell.instance[size] = canvas
    return canvas
}

Cell.instance = []

export default Cell
