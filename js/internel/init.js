import getInitContainer from '../utils/getInitContainer'
import getContainerInstance from '../utils/getContainerInstance'
import getRandomEle from '../utils/getRandomEle'
import { raf } from '../utils/animationFrame'
import renderRafInterval from './renderRafInterval'
import updateRafInterval from './updateRafInterval'
import Event from '../utils/event'

export default init

function init () {
    var self = this

    var containerData = getInitContainer()

    this.activeEle = getRandomEle(this.size)
    this.nextEle = getRandomEle(this.size)

    this.event = new Event

    this.container = {
        data: containerData,
        instance: getContainerInstance(containerData, this.size)
    }

    this.renderRaf = raf(function () {
        renderRafInterval.call(self)
    })

    this.updateRaf = raf(function () {
        updateRafInterval.call(self)
    })

    setTimeout(function () {
        self.event.dispatch('nextElementChange', self.nextEle)
    }, 0)
}
