import * as React from "@pwa-fundament/reactivity";
import { Icon } from "./icon";

export function Select(
    value: React.State<string>,
    options: React.ListState<string>,
): HTMLSelectElement {
    value.value = [...options.value.values()][0];

    return (
        <div class="select-wrapper">
            <select
                bind:value={value}
                children:append={[options, StringToOption]}
            ></select>
            {Icon("arrow_drop_down")}
        </div>
    );
}

export function Option(
    text: string,
    value: string,
    selectedOnCreate: boolean,
): HTMLOptionElement {
    return (
        <option value={value} toggle:selected={selectedOnCreate}>
            {text}
        </option>
    );
}

export const StringToOption: React.StateItemConverter<string> = (
    string: string,
) => {
    return Option(string, string, false);
};
