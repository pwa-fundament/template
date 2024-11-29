import * as React from "@pwa-fundament/reactivity";

export function ProgressBar(
    percentValue:
        | React.State<number | undefined>
        | React.State<number>
        | React.State<undefined>,
): HTMLProgressElement {
    const valueDiv: HTMLDivElement = <div></div>;

    percentValue.subscribe((newValue) => {
        if (newValue == undefined) {
            valueDiv.style.width = "";
            valueDiv.setAttribute("indeterminate", "");
        } else {
            valueDiv.style.width = `${newValue}%`;
            valueDiv.removeAttribute("indeterminate");
        }
    });

    return <div role="progressbar">{valueDiv}</div>;
}
