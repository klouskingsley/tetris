import { raf } from '../utils/animationFrame'
import render from './render'

export default renderRafInterval

function renderRafInterval () {
    var self = this

    if (!self._pause) {
        if (self.ctx) {
            render.call(self)
        }
    }

    self.renderRaf = raf(function () {
        renderRafInterval.call(self)
    })
}
