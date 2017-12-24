import left from './api/left'
import right from './api/right'
import down from './api/down'
import change from './api/change'
import pause from './api/pause'
import start from './api/start'
import stop from './api/stop'
import on from './api/on'

import _init from './internel/init'

export default Game


function Game (opt) {
    this._opt = opt || {}
    this._pause = true
    this.ctx = this._opt.ctx
    this.size = this._opt.size || 20
    this.speed = this._opt.speed || 1

    _init.call(this)
}

left(Game)
right(Game)
down(Game)
change(Game)
pause(Game)
start(Game)
stop(Game)
on(Game)
