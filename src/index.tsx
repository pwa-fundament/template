import "@pwa-fundament/stylesheet/index.css";

import { Theme, setTheme } from "@pwa-fundament/themes";

import ViewRoot from "./Main/viewRoot";

// prepare
document.title = "PWA Fundament";
setTheme(Theme.Standard);

// build UI
document.body.append(ViewRoot());
