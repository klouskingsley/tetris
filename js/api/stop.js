import destroy from '../internel/destroy'

export default stop

function stop (Game) {
    Game.prototype.stop = function () {
        this._gameOver = true
        destroy.call(this)

        this.event.dispatch('stop')
    }
}
