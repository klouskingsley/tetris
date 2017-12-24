import getEleInfo from '../utils/getEleInfo'
import getRandomEle from '../utils/getRandomEle'
import getContainerInstance from '../utils/getContainerInstance'

export default resolveCollide

function resolveCollide () {
    setCollideContainerData.call(this)
    setScoreContainerData.call(this)
    this.container.instance = getContainerInstance(this.container.data, this.size)
    this.activeEle = this.nextEle
    this.nextEle = getRandomEle(this.size)

    this.event.dispatch('nextElementChange', this.nextEle)
}

function setCollideContainerData () {
    var info = getEleInfo(this.activeEle.type, this.activeEle.shapeType)
    var left = this.activeEle.left
    var top = this.activeEle.bottom - info.height

    var i
    var j
    for (i = 0; i < info.width; i++) {
        for (j = 0; j < info.height; j++) {
            if (info.data[i][j]) {
                this.container.data[left + i][top + j] = true
            }
        }
    }
}

function setScoreContainerData () {
    var j
    var h = this.container.data[0].length
    var scoreRows = []

    // 找出要消除的行
    for (j = 0; j < h; j++) {
        if (isContainerRowsAllTrue.call(this, j)) {
            scoreRows.push(j)
        }
    }

    // 消除相应行并unshift新false行
    for (var i = 0; i < scoreRows.length; i++) {
        clearTrueRowAddFalseRow.call(this, scoreRows[i])
    }

    scoreRows.length && this.event.dispatch('score', Math.floor(scoreRows.length * 1.8) * 100)

    return scoreRows
}

function isContainerRowsAllTrue (row) {
    for (var i = 0; i < 10; i++) {
        if (!this.container.data[i][row]) {
            return false
        }
    }
    return true
}

function clearTrueRowAddFalseRow (row) {
    var i
    for (var i = 0; i < 10; i++) {
        this.container.data[i].splice(row, 1)
        this.container.data[i].unshift(false)
    }
}