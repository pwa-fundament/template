import "@pwa-fundament/stylesheet/index.css";
import "@pwa-fundament/themes/themes/standard"

import ViewRoot from "./Main/viewRoot";

// prepare
document.title = "PWA Fundament";

// build UI
document.body.append(ViewRoot());
