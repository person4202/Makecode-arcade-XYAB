extraButtons.onXButton(ControllerButtonEvent.Pressed, function () {
    game.splash("X button pressed!")
})

extraButtons.onYButton(ControllerButtonEvent.Released, function () {
    game.splash("Y button released!")
})
