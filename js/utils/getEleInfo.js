export default getEleInfo

/**
 * 0,
 *          **
 *          **
 * 
 * 1,       
 * 
 *          *       *                *
 *         ***      **     ***      **
 *                  *       *        *
 * 
 * 2,
 *         ****     *
 *                  *
 *                  *
 *                  *
 * 
 * 3,
 * 
 *                  
 *            *     *       ***     **
 *          ***     *       *        *
 *                  **               *
 * 
 * 4,
 *          *       **      ***       *
 *          ***     *         *       *
 *                  *                **
 * 
 * 5,       
 *          **          *
 *           **        **
 *                     *
 * 
 * 6,
 *           **         *
 *          **          **
 *                       *
 */



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
}

function getEleInfo (type, shapeType) {
    return eleInfoMap[type][shapeType]
}
