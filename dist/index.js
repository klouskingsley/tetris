(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Game = factory());
}(this, (function () { 'use strict';

var eleInfoMap = {
    0: {
        0: {
            width: 2,
            height: 2,
            data: [
                [true, true],
                [true, true]
            ]
        }
    },

    1: {
        0: {
            width: 3,
            height: 2,
            data: [
                [false, true],
                [true, true],
                [false, true]
            ]
        },
        1: {
            width: 2,
            height: 3,
            data: [
                [true, true, true],
                [false, true, false]
            ]
        },
        2: {
            width: 3,
            height: 2,
            data: [
                [true, false],
                [true, true],
                [true, false]
            ]
        },
        3: {
            width: 2,
            height: 3,
            data: [
                [false, true, false],
                [true, true, true]
            ]
        }
    },

    2: {
        0: {
            width: 4,
            height: 1,
            data: [
                [true],
                [true],
                [true],
                [true]
            ]
        },
        1: {
            width: 1,
            height: 4,
            data: [
                [true, true, true, true]
            ]
        }
    },

    3: {
        0: {
            width: 3,
            height: 2,
            data: [
                [false, true],
                [false, true],
                [true, true]
            ]
        },
        1: {
            width: 2,
            height: 3,
            data: [
                [true, true, true],
                [false, false, true]
            ]
        },
        2: {
            width: 3,
            height: 2,
            data: [
                [true, true],
                [true, false],
                [true, false]
            ]
        },
        3: {
            width: 2,
            height: 3,
            data: [
                [true, false, false],
                [true, true, true]
            ]
        }
    },

    4: {
        0: {
            width: 3,
            height: 2,
            data: [
                [true, true],
                [false, true],
                [false, true]
            ]
        },
        1: {
            width: 2,
            height: 3,
            data: [
                [true, true, true],
                [true, false, false]
            ]
        },
        2: {
            width: 3,
            height: 2,
            data: [
                [true, false],
                [true, false],
                [true, true]
            ]
        },
        3: {
            width: 2,
            height: 3,
            data: [
                [false, false, true],
                [true, true, true]
            ]
        }
    },

    5: {
        0: {
            width: 3,
            height: 2,
            data: [
                [true, false],
                [true, true],
                [false, true]
            ]
        },
        1: {
            width: 2,
            height: 3,
            data: [
                [false, true, true],
                [true, true, false]
            ]
        }
    },

    6: {
        0: {
            width: 3,
            height: 2,
            data: [
                [false, true],
                [true, true],
                [true, false]
            ]
        },
        1: {
            width: 2,
            height: 3,
            data: [
                [true, true, false],
                [false, true, true]
            ]
        }
    }
};

function getEleInfo$1 (type, shapeType) {
    return eleInfoMap[type][shapeType]
}

function isCollided$1 (ele, containerData) {
    var type = ele.type;
    var shapeType = ele.shapeType;
    var info = getEleInfo$1(type, shapeType);
    var top = ele.bottom - info.height;
    var left = ele.left;

    var i;
    var j;

    for (i = 0; i < info.width; i++) {
        for (j = 0; j < info.height; j++) {
            if (info.data[i][j] && containerData[left + i][top + j]) {
                return true
            }
        }
    }

    return false
}

function left$1 (Game) {
    Game.prototype.left = function () {
        if (this.activeEle.left > 0) {
            var ele = {
                type: this.activeEle.type,
                shapeType: this.activeEle.shapeType,
                left: this.activeEle.left - 1,
                bottom: this.activeEle.bottom
            };
            
            if (!isCollided$1(ele, this.container.data)) {
                this.activeEle.left--;

                this.event.dispatch('left', this.activeEle.left);
            }
        }
    };
}

function right$1 (Game) {
    Game.prototype.right = function () {
        var width = getEleInfo$1(this.activeEle.type, this.activeEle.shapeType).width;
        if (this.activeEle.left + width < 10) {

            var ele = {
                type: this.activeEle.type,
                shapeType: this.activeEle.shapeType,
                left: this.activeEle.left + 1,
                bottom: this.activeEle.bottom
            };

            if (!isCollided$1(ele, this.container.data)) {
                this.activeEle.left++;

                this.event.dispatch('right', this.activeEle.left);
            }
            
        }
    };
}

function down$1 (Game) {
    Game.prototype.down = function () {
        this.downingEle = this.activeEle;
    };
}

function getNextShapeRect$1 (ele, container) {

    if (ele.type === 0) {
        return {
            shapeType: 0,
            left: ele.left
        }
    }

    var nextShapeType = getNextShapeType(ele.type, ele.shapeType);
    var nextInfo = getEleInfo$1(ele.type, nextShapeType);
    var preInfo = getEleInfo$1(ele.type, ele.shapeType);


    var preCenter = Math.ceil(preInfo.width / 2) - 1;
    var nextCenter = Math.ceil(nextInfo.width / 2) - 1;

    var maxStep = Math.max(preInfo.width, nextInfo.width) - 1;

    var left = preCenter - nextCenter + ele.left;

    for (var i = 0; i <= maxStep; i++) {

        var ele1 = {
            type: ele.type,
            shapeType: nextShapeType,
            left: left + i,
            bottom: ele.bottom
        };

        var ele2 = {
            type: ele.type,
            shapeType: nextShapeType,
            left: left - i,
            bottom: ele.bottom
        };

        if (ele1.left >= 0 && (ele1.left + nextInfo.width <= 10) && !isCollided$1(ele1, container.data)) {
            left = ele1.left;
            break
        }

        if (ele2.left >= 0 && (ele2.left + nextInfo.width <= 10) && !isCollided$1(ele2, container.data)) {
            left = ele2.left;
            break
        }
    }

    if (i < maxStep + 1) {
        return {
            shapeType: nextShapeType,
            left: left
        }
    }

    return {
        shapeType: ele.shapeType,
        left: ele.left
    }
}


function getNextShapeType (type, shapeType) {
    if (type === 0) {
        return 0
    }

    if (type === 1 || type === 3 || type === 4) {
        return (shapeType + 1) % 4
    }

    if (type === 2 || type === 5 || type === 6) {
        return (shapeType + 1) % 2
    }
}

function Cell (size) {
    size = size || 20;
    
    if (Cell.instance[size]) {
        return Cell.instance[size]
    } 
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.setAttribute('width', size);
    canvas.setAttribute('height', size);

    ctx.beginPath();
    ctx.rect(0, 0, size - 2, size - 2);
    ctx.strokeStyle = '#00eb00';
    ctx.fillStyle = '#008000';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fill();
    Cell.instance[size] = canvas;
    return canvas
}

Cell.instance = [];

function Ele$1 (type, shapeType) {
    var info = getEleInfo$1(type, shapeType);

    var key = '' + type + shapeType;
    if (Ele$1.instance[key]) {
        return Ele$1.instance[key]
    }

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    canvas.setAttribute('width', info.width * 20);
    canvas.setAttribute('height', info.height * 20);

    for (var i = 0; i < info.data.length; i++) {
        for (var j = 0; j < info.data[i].length; j++) {
            info.data[i][j] && ctx.drawImage(new Cell, i * 20, j * 20);
        }
    }

    Ele$1.instance[key] = canvas;
    
    return canvas
}

Ele$1.instance = [];

function getEleInstance$1 (type, shapeType, size) {
    return new Ele$1(type, shapeType, size)
}

function isCollideing (ele, containerData) {
    var bottom = ele.bottom;
    var left = ele.left;
    var type = ele.type;
    var shapeType = ele.shapeType;
    var info = getEleInfo$1(type, shapeType);
    var top = bottom - info.height;

    var i;
    var j;

    if (bottom === 20) {
        return true
    }

    for (i = 0; i < info.width; i++) {
        for (j = 0; j < info.height; j++) {

            if (info.data[i][j] && containerData[i + left][top + j + 1]) {
                return true
            }
        }
    }

    return false
}

function change$1 (Game) {
    Game.prototype.change = function () {
        var nextShapeRect = getNextShapeRect$1(this.activeEle, this.container);

        this.activeEle.shapeType = nextShapeRect.shapeType;
        this.activeEle.left = nextShapeRect.left;
        this.activeEle.instance = getEleInstance$1(this.activeEle.type, this.activeEle.shapeType, this.size);
    };
}

function pause$1 (Game) {
    Game.prototype.pause = function () {
        this._pause = true;

        this.event.dispatch('pause');
    };
}

function getInitContainer$1 () {
    var arr = [];
    
    for (var i = 0; i < 10; i++) {
        arr[i] = [];

        for (var j = 0; j < 20; j++) {
            arr[i][j] = false;
        }
    }

    return arr
}

function getContainerInstance$1 (arr, size) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.setAttribute('width', arr.length * size);
    canvas.setAttribute('height', arr[0].length * size);

    var i;
    var j;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            arr[i][j] && ctx.drawImage(new Cell(size), i * size, j * size);
        }
    }

    return canvas
}

function getRandomEleTypeShapeType$1 () {
    var type = random(0, 6);
    var shapeType;

    if (type === 0) {
        shapeType = 0;
    }

    if (type === 1 || type === 3 || type === 4) {
        shapeType = random(0, 3);
    }

    if (type === 2 || type === 5 || type === 6) {
        shapeType = random(0, 1);    
    }

    return {
        type: type,
        shapeType: shapeType
    }
}

function random (min, max) {
    return min + Math.round(Math.random() * (max - min))
}

function getRandomEle$1 (size) {
    var shapeObj = getRandomEleTypeShapeType$1();

    var type = shapeObj.type;
    var shapeType = shapeObj.shapeType;

    var instance = getEleInstance$1(type, shapeType, size);
    var left = 5 - Math.ceil(getEleInfo$1(type, shapeType).width / 2);

    var ret = {
        type: type,
        shapeType: shapeType,
        left: left,
        bottom: 0,
        instance: instance,
        updateTimeElapsed: 0
    };

    return ret
}

var raf = getRaf();
var caf = getCaf();

function getRaf () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        window.oRequestAnimationFrame || 
        window.msRequestAnimationFrame ||
        function (callback) {
            return setTimeout(function () {
                callback();
            }, 1000 / 16)
        }
}

function getCaf () {
    return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        function (rid) {
            return clearTimeout(rid)
        }
}

function render$1 () {
    this.ctx.clearRect(0, 0, 10 * this.size, 20 * this.size);
    this.ctx.beginPath();
    this.ctx.strokeRect(0, 0, 10 * this.size, 20 * this.size);
    
    this.ctx.drawImage(this.container.instance, 0, 0);

    this.ctx.drawImage(
        this.activeEle.instance,
        this.activeEle.left * this.size,
        (this.activeEle.bottom - getEleInfo$1(this.activeEle.type, this.activeEle.shapeType).height) * this.size
    );
}

function renderRafInterval$1 () {
    var self = this;

    if (!self._pause) {
        if (self.ctx) {
            render$1.call(self);
        }
    }

    self.renderRaf = raf(function () {
        renderRafInterval$1.call(self);
    });
}

function resolveCollide$1 () {
    setCollideContainerData.call(this);
    setScoreContainerData.call(this);
    this.container.instance = getContainerInstance$1(this.container.data, this.size);
    this.activeEle = this.nextEle;
    this.nextEle = getRandomEle$1(this.size);

    this.event.dispatch('nextElementChange', this.nextEle);
}

function setCollideContainerData () {
    var info = getEleInfo$1(this.activeEle.type, this.activeEle.shapeType);
    var left = this.activeEle.left;
    var top = this.activeEle.bottom - info.height;

    var i;
    var j;
    for (i = 0; i < info.width; i++) {
        for (j = 0; j < info.height; j++) {
            if (info.data[i][j]) {
                this.container.data[left + i][top + j] = true;
            }
        }
    }
}

function setScoreContainerData () {
    var j;
    var h = this.container.data[0].length;
    var scoreRows = [];

    // 找出要消除的行
    for (j = 0; j < h; j++) {
        if (isContainerRowsAllTrue.call(this, j)) {
            scoreRows.push(j);
        }
    }

    // 消除相应行并unshift新false行
    for (var i = 0; i < scoreRows.length; i++) {
        clearTrueRowAddFalseRow.call(this, scoreRows[i]);
    }

    scoreRows.length && this.event.dispatch('score', Math.floor(scoreRows.length * 1.8) * 100);

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
    var i;
    for (var i = 0; i < 10; i++) {
        this.container.data[i].splice(row, 1);
        this.container.data[i].unshift(false);
    }
}

function update$1 () {
    var time = +new Date;

    if (this._gameOver) {
        return
    }
    
    if (this.updateRafTime) {
        var gap = time - this.updateRafTime;

        var bottomPlusGap = this.downingEle == this.activeEle ? 1 : (700 / this.speed); 

        if (this.activeEle.updateTimeElapsed + gap > bottomPlusGap) {

            if (isCollideing(this.activeEle, this.container.data)) {
                if (this.isColliding) {
                    if (this.activeEle.bottom === 0) {

                        this.event.dispatch('over');
                        this._gameOver = true;
                    }
                    resolveCollide$1.call(this);
                    this.isColliding = false;
                } else {
                    this.isColliding = true;
                }
            } else {
                this.activeEle.bottom++;
                this.activeEle.updateTimeElapsed = this.activeEle.updateTimeElapsed + gap - bottomPlusGap;
            }

        } else {
            this.activeEle.updateTimeElapsed += gap;
        }
    }

    this.updateRafTime = time;

}

function updateRafInterval$1 () {
    var self = this;

    if (!self._pause) {
        update$1.call(this);
    }

    self.updateRaf = raf(function () {
        updateRafInterval$1.call(self);
    });
}

function Event$1 () {
    this.events = [];
}

Event$1.prototype.on = function (type, cb) {
    var randomId = Math.random();

    var handler = {
        id: randomId,
        cb: cb
    };

    if (this.events[type] && this.events[type].length) {
        this.events[type].push(handler);
    } else {
        this.events[type] = [handler];
    }

    return randomId
};

Event$1.prototype.off = function (type, cb) {
    if (this.events[type] && this.events[type].length) {
        var idx;
        this.events[type].map(function (handler, i) {
            if (handler.id === cb || handler.cb === cb) {
                idx = i;
            }
        });
        idx !== undefined && this.events[type].splice(idx, 1);
    }
};

Event$1.prototype.dispatch = function (type, data) {
    if (this.events[type] && this.events[type].length) {
        this.events[type].map(function (handler) {
            typeof handler.cb === 'function' && handler.cb(data);
        });
    }
};

function init$1 () {
    var self = this;

    var containerData = getInitContainer$1();

    this.activeEle = getRandomEle$1(this.size);
    this.nextEle = getRandomEle$1(this.size);

    this.event = new Event$1;

    this.container = {
        data: containerData,
        instance: getContainerInstance$1(containerData, this.size)
    };

    this.renderRaf = raf(function () {
        renderRafInterval$1.call(self);
    });

    this.updateRaf = raf(function () {
        updateRafInterval$1.call(self);
    });

    setTimeout(function () {
        self.event.dispatch('nextElementChange', self.nextEle);
    }, 0);
}

function start$1 (Game) {
    Game.prototype.start = function () {
        if (this._gameOver) {
            init$1.call(this);
        }
        
        this._pause = false;
        this._gameOver = false;
        this.updateRafTime = +new Date;

        this.event.dispatch('start');
    };
}

function destroy$1 () {
    caf(this.renderRaf);
    caf(this.updateRaf);
}

function stop$1 (Game) {
    Game.prototype.stop = function () {
        this._gameOver = true;
        destroy$1.call(this);

        this.event.dispatch('stop');
    };
}

function on$1 (Game) {
    Game.prototype.on = function (type, cb) {
        return this.event.on(type, cb)
    };
}

function Game$1 (opt) {
    this._opt = opt || {};
    this._pause = true;
    this.ctx = this._opt.ctx;
    this.size = this._opt.size || 20;
    this.speed = this._opt.speed || 1;

    init$1.call(this);
}

left$1(Game$1);
right$1(Game$1);
down$1(Game$1);
change$1(Game$1);
pause$1(Game$1);
start$1(Game$1);
stop$1(Game$1);
on$1(Game$1);

return Game$1;

})));
