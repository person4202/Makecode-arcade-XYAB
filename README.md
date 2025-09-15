# Extra Buttons – MakeCode Arcade Extension

This extension adds **virtual X and Y buttons** to the Arcade controller API, so you can use them just like A and B.

### Example

```ts
extraButtons.onXButton(ControllerButtonEvent.Pressed, function () {
    game.splash("X button pressed!")
})
extraButtons.onYButton(ControllerButtonEvent.Pressed, function () {
    game.splash("Y button pressed!")
})
