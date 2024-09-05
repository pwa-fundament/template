import "@pwa-fundament/stylesheet/index.css";

import { Theme, setTheme } from "@pwa-fundament/themes";

import ViewRoot from "./Main/viewRoot";
import registerServiceWorker from "./_Support/serviceWorker";

// prepare
document.title = "PWA Fundament";
setTheme(Theme.Standard);
registerServiceWorker();

// build UI
document.body.append(ViewRoot());
