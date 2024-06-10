import { menu } from "./menu.js"
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener('load', function () {
    console.log('load?')
    smooth();
    link();
    menu();
    port();
});