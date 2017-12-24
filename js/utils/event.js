export default Event

function Event () {
    this.events = []
}

Event.prototype.on = function (type, cb) {
    var randomId = Math.random()

    var handler = {
        id: randomId,
        cb: cb
    }

    if (this.events[type] && this.events[type].length) {
        this.events[type].push(handler)
    } else {
        this.events[type] = [handler]
    }

    return randomId
}

Event.prototype.off = function (type, cb) {
    if (this.events[type] && this.events[type].length) {
        var idx
        this.events[type].map(function (handler, i) {
            if (handler.id === cb || handler.cb === cb) {
                idx = i
            }
        })
        idx !== undefined && this.events[type].splice(idx, 1)
    }
}

Event.prototype.dispatch = function (type, data) {
    if (this.events[type] && this.events[type].length) {
        this.events[type].map(function (handler) {
            typeof handler.cb === 'function' && handler.cb(data)
        })
    }
}
