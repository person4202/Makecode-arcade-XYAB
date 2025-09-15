//% weight=100 color=#0077cc icon="\uf11c"
//% block="Extra Buttons"
namespace extraButtons {
    // Define custom controller buttons
    let X = controller.player1.onButtonEvent
    let Y = controller.player1.onButtonEvent

    /**
     * Run code when the X button is pressed or released
     */
    //% block="on X button %event"
    export function onXButton(event: ControllerButtonEvent, handler: () => void) {
        controller.player1.onButtonEvent(ControllerButton.A, event, () => {
            handler()
        })
    }

    /**
     * Run code when the Y button is pressed or released
     */
    //% block="on Y button %event"
    export function onYButton(event: ControllerButtonEvent, handler: () => void) {
        controller.player1.onButtonEvent(ControllerButton.B, event, () => {
            handler()
        })
    }
}
