import { raf } from '../utils/animationFrame'
import update from './update'

export default updateRafInterval

function updateRafInterval () {
    var self = this

    if (!self._pause) {
        update.call(this)
    }

    self.updateRaf = raf(function () {
        updateRafInterval.call(self)
    })
}
