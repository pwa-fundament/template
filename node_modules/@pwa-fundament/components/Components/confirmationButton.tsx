import * as React from "@pwa-fundament/reactivity";
import { Icon } from "./icon";

export function ConfirmationButton(
    actionLabel: string,
    cancelLabel: string,
    icon: string,
    action: () => void,
): HTMLDivElement {
    const isActionRequested = new React.State(false);
    const isActionNotRequested = React.createProxyState(
        [isActionRequested],
        () => isActionRequested.value == false,
    );

    function requestAction() {
        isActionRequested.value = true;
    }
    function cancelRequest() {
        isActionRequested.value = false;
    }
    function performAction() {
        action();
        cancelRequest();
    }

    return (
        <div class="flex-row row-gap width-100 max-width-input">
            <button
                class="standard flex-1"
                on:click={cancelRequest}
                toggle:hidden={isActionNotRequested}
            >
                {cancelLabel}
                {Icon("undo")}
            </button>
            <button
                class="danger flex-1"
                on:click={requestAction}
                toggle:hidden={isActionRequested}
            >
                {actionLabel}
                {Icon(icon)}
            </button>
            <button
                class="danger flex-1"
                on:click={performAction}
                toggle:hidden={isActionNotRequested}
            >
                {actionLabel}
                {Icon("warning")}
            </button>
        </div>
    );
}
