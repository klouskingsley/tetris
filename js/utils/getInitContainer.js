export default getInitContainer

function getInitContainer () {
    var arr = []
    
    for (var i = 0; i < 10; i++) {
        arr[i] = []

        for (var j = 0; j < 20; j++) {
            arr[i][j] = false
        }
    }

    return arr
}
