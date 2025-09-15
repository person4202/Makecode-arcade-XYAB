//% weight=100 color=#0077cc icon="\uf11c"
//% block="Extra Buttons"
namespace extraButtons {
    // Internal state trackers
    let xPressed = false
    let yPressed = false

    /**
     * Run code when the X button is pressed or released
     */
    //% block="on X button %event"
    export function onXButton(event: ControllerButtonEvent, handler: () => void) {
        game.onUpdate(function () {
            const down = controller._isKeyDown(Key.X)
            if (down && !xPressed) {
                xPressed = true
                if (event == ControllerButtonEvent.Pressed) handler()
            } else if (!down && xPressed) {
                xPressed = false
                if (event == ControllerButtonEvent.Released) handler()
            }
        })
    }

    /**
     * Run code when the Y button is pressed or released
     */
    //% block="on Y button %event"
    export function onYButton(event: ControllerButtonEvent, handler: () => void) {
        game.onUpdate(function () {
            const down = controller._isKeyDown(Key.Y)
            if (down && !yPressed) {
                yPressed = true
                if (event == ControllerButtonEvent.Pressed) handler()
            } else if (!down && yPressed) {
                yPressed = false
                if (event == ControllerButtonEvent.Released) handler()
            }
        })
    }
}
