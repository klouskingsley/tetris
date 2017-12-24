export default on

function on (Game) {
    Game.prototype.on = function (type, cb) {
        return this.event.on(type, cb)
    }
}
