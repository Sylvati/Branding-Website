/*
 * Landing Page for Brand Website
 * JS source code
 * Author: Lach
 * Version: 1.0
*/

// MVC Design-Pattern
import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';



function init() {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);
}

// Wait for the window to load, then initialize.
window.addEventListener('load', init);