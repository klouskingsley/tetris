import getContainerInstance from '../utils/getContainerInstance'
import isColliding from '../utils/isColliding'
import resolveCollide from './resolveCollide'

export default update

function update () {
    var time = +new Date

    if (this._gameOver) {
        return
    }
    
    if (this.updateRafTime) {
        var gap = time - this.updateRafTime

        var bottomPlusGap = this.downingEle == this.activeEle ? 1 : (700 / this.speed) 

        if (this.activeEle.updateTimeElapsed + gap > bottomPlusGap) {

            if (isColliding(this.activeEle, this.container.data)) {
                if (this.isColliding) {
                    if (this.activeEle.bottom === 0) {

                        this.event.dispatch('over')
                        this._gameOver = true
                    }
                    resolveCollide.call(this)
                    this.isColliding = false
                } else {
                    this.isColliding = true
                }
            } else {
                this.activeEle.bottom++
                this.activeEle.updateTimeElapsed = this.activeEle.updateTimeElapsed + gap - bottomPlusGap
            }

        } else {
            this.activeEle.updateTimeElapsed += gap
        }
    }

    this.updateRafTime = time

}
