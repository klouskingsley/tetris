# Tetris 俄罗斯方块

# Install

```html
<script src="dist/index.js"></script>
```

# Usage

```html
<canvas width="400" height="400" id="canvas">
```

```js

var ctx = document.getElementById('canvas')
var tetris = new Tetris({ctx: ctx})

tetris.start()

```

# Api

#### Tetris(options)

#### options

Type: `object`

```js
new Tetris({
    // required, the canvas context you want to render
    ctx,

    // optional, the speed of downing, type: number
    speed
})
```

#### .start()

Start the game

#### .pause()

Pause the game

#### .stop ()

Stop the game

#### .left()

Move the downing element to left

#### .right()

Move the downing element to right

#### .change()

Change the shape of the downing element

#### .down()

Move the downing element to bottom right now

#### .on(*event*, *handler*)

event | handler args
--- | ---
`score`: Fired when score changed | `scoreNumber`: The number of lines eliminated
`over`: Fired when game over | no args
`nextElementChange`: Fired when next element changed | `element`: `element.instance` is next element's `canvas` object, your can use `drawImage` to render it


# License

MIT © klouskingsley
