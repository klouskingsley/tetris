import getEleInfo from '../utils/getEleInfo'

export default render

function render () {
    this.ctx.clearRect(0, 0, 10 * this.size, 20 * this.size)
    this.ctx.beginPath()
    this.ctx.strokeRect(0, 0, 10 * this.size, 20 * this.size)
    
    this.ctx.drawImage(this.container.instance, 0, 0)

    this.ctx.drawImage(
        this.activeEle.instance,
        this.activeEle.left * this.size,
        (this.activeEle.bottom - getEleInfo(this.activeEle.type, this.activeEle.shapeType).height) * this.size
    )
}
