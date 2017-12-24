export default pause

function pause (Game) {
    Game.prototype.pause = function () {
        this._pause = true

        this.event.dispatch('pause')
    }
}