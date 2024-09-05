import "./themes/aero/index.css";
import "./themes/standard/index.css";

export enum Theme {
  Standard = "standard",
  Aero = "aero",
}

export function setTheme(theme: Theme): void {
  document.body.setAttribute("theme", theme);
}
