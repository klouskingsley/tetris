import getNextShapeRect from '../utils/getNextShapeRect'
import getEleInstance from '../utils/getEleInstance'
import isColliding from '../utils/isColliding'

export default change 

function change (Game) {
    Game.prototype.change = function () {
        var nextShapeRect = getNextShapeRect(this.activeEle, this.container)

        this.activeEle.shapeType = nextShapeRect.shapeType
        this.activeEle.left = nextShapeRect.left
        this.activeEle.instance = getEleInstance(this.activeEle.type, this.activeEle.shapeType, this.size)
    }
}
