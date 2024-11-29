import * as React from "@pwa-fundament/reactivity";

import { ModalContentWindow } from "./modal";

export class PopoverModel {
    isOpen = new React.State(false);

    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    open = () => {
        this.isOpen.value = true;
    };

    close = () => {
        this.isOpen.value = false;
    };
}

export function Popover(
    model: PopoverModel,
    mainElement: HTMLElement,
    buttons: HTMLButtonElement[],
): HTMLDivElement {
    const popover = ModalContentWindow(model.isOpen, mainElement, buttons);
    popover.classList.add("popover");
    popover.addEventListener("click", (e) => e.stopPropagation());

    model.isOpen.subscribe((newValue) => {
        if (newValue == false) return;

        // reset old styles
        popover.style.top = "";
        popover.style.left = "";

        // get info
        const width = popover.offsetWidth;
        const height = popover.offsetHeight;

        // get dimentions
        let top = model.y - height / 2;
        let left = model.x - width / 2;

        // guard offset to top/left
        if (top < 0) {
            top = 0;
        }
        if (left < 0) {
            left = 0;
        }

        // guard offset to bottom/right
        if (top + height > document.body.offsetHeight) {
            const offset = top + height - document.body.offsetHeight;
            top -= offset;
        }
        if (left + width > document.body.offsetWidth) {
            const offset = left + width - document.body.offsetWidth;
            left -= offset;
        }

        popover.style.top = top + "px";
        popover.style.left = left + "px";
    });

    return popover;
}

export function openPopoverAtClickLocation(
    isPopoverOpen: React.State<boolean>,
    coordinates: PopoverModel,
    clickEvent: MouseEvent,
): void {
    coordinates.x = clickEvent.clientX;
    coordinates.y = clickEvent.clientY;
    isPopoverOpen.value = true;
}
