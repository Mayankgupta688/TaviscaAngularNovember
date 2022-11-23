import "zone.js/dist/zone";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import MyModule from "./app/app.module";

platformBrowserDynamic().bootstrapModule(MyModule)
