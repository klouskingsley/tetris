import isCollided from '../utils/isCollided'

export default left

function left (Game) {
    Game.prototype.left = function () {
        if (this.activeEle.left > 0) {
            var ele = {
                type: this.activeEle.type,
                shapeType: this.activeEle.shapeType,
                left: this.activeEle.left - 1,
                bottom: this.activeEle.bottom
            }
            
            if (!isCollided(ele, this.container.data)) {
                this.activeEle.left--

                this.event.dispatch('left', this.activeEle.left)
            }
        }
    }
}
