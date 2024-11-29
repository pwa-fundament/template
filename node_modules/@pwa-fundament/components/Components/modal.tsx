import * as React from "@pwa-fundament/reactivity";

export function Modal(
    isOpen: React.State<boolean>,
    mainElement: HTMLElement,
    buttons: HTMLButtonElement[],
): HTMLDivElement {
    return (
        <div class="modal-wrapper" toggle:open={isOpen}>
            {ModalContentWindow(isOpen, mainElement, buttons)}
        </div>
    );
}

export function ModalContentWindow(
    isOpen: React.State<boolean>,
    mainElement: HTMLElement,
    buttons: HTMLButtonElement[],
): HTMLDivElement {
    const modal = (
        <div class="modal-window" toggle:open={isOpen}>
            {mainElement}
            <div class="control-row">{...buttons}</div>
        </div>
    );
    modal.addEventListener("click", (e) => e.stopPropagation());
    return modal;
}
