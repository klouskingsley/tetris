import getEleInfo from '../utils/getEleInfo'
import isCollieded from '../utils/isCollided'

export default right

function right (Game) {
    Game.prototype.right = function () {
        var width = getEleInfo(this.activeEle.type, this.activeEle.shapeType).width
        if (this.activeEle.left + width < 10) {

            var ele = {
                type: this.activeEle.type,
                shapeType: this.activeEle.shapeType,
                left: this.activeEle.left + 1,
                bottom: this.activeEle.bottom
            }

            if (!isCollieded(ele, this.container.data)) {
                this.activeEle.left++

                this.event.dispatch('right', this.activeEle.left)
            }
            
        }
    }
}
