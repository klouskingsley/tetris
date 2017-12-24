import init from '../internel/init'

export default start

function start (Game) {
    Game.prototype.start = function () {
        if (this._gameOver) {
            init.call(this)
        }
        
        this._pause = false
        this._gameOver = false
        this.updateRafTime = +new Date

        this.event.dispatch('start')
    }
}
