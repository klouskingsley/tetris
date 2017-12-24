export default down

function down (Game) {
    Game.prototype.down = function () {
        this.downingEle = this.activeEle
    }
}
