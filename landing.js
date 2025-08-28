/*
 * Landing Page for Brand Website
 * JS source code
 * Author: Lach
 * Version: 1.0
*/
let model = undefined;
let view = undefined;
let controller = undefined;

// MVC Design-Pattern

// Model
// Should hold the data
class Model {
    constructor() {
        this.platforms = {
            tiktok: "https://www.tiktok.com/@lachmood",
            youtube: "https://www.youtube.com/@lachmood",
            twitch: "https://www.twitch.tv/lachmood",
            twitter: "https://twitter.com/lachmood",
            instagram: "https://www.instagram.com/lachmood/"
        }

        this.log = "Log:\n";
        this.controllerUpdate = undefined;
    }

    // Defines how to update the data
    dataUpdate(args) {
        console.log(args);
        if(args === 'tiktok') {
            console.log("TikTok button clicked!");
            this.log += "TikTok button clicked!\n";
        }
        this.controllerUpdate(this.data);
    }

    // Sets the function when the controller updates the model
    addEventHandler(e) {
        this.controllerUpdate = e;
    };
}

// View
// Should handle the UI
class View {
    constructor() {
        /*
        Get these buttons
        Tiktok, Youtube, Twitch, Twitter, Instagram buttons
        */
        this.tiktok_button = document.getElementById("tiktok");
        this.youtube_button = document.getElementById("youtube");
        this.twitch_button = document.getElementById("twitch");
        this.twitter_button = document.getElementById("twitter");
        this.instagram_button = document.getElementById("instagram");
        
        // Gets the log 
        this.log_element = document.getElementById("log");
    }

    // Defines how to add event handlers
    addEventHandlers(handlers) {
        // Adds an event listener to the tiktok button
        this.tiktok_button.addEventListener('click', handlers.tiktok_handler);
        // Adds an event listener to the youtube button
        this.youtube_button.addEventListener('click', handlers.youtube_handler);
        // Adds an event listener to the twitch button
        this.twitch_button.addEventListener('click', handlers.twitch_handler);
        // Adds an event listener to the twitter button
        this.twitter_button.addEventListener('click', handlers.twitter_handler);
        // Adds an event listener to the instagram button
        this.instagram_button.addEventListener('click', handlers.instagram_handler);
    };

    // Defines what happens when display updates
    displayUpdate(v) {
        console.log("We got here");
        this.log_element.innerText = model.log;
    };
}

// Controller
// Should connect the Model and View
// i. e. handle the events
class Controller {
    constructor() {
        // Evokes add event handler from the model
        model.addEventHandler(this.processModel);

        // Adds the event handler from the view
        view.addEventHandlers(this.handlers);
    }

    

    // Defines how to process the model updating
    // Model -> Controller -> View
    processModel(data) {
        view.displayUpdate(data);
    }

    // Defines how to process incoming view data
    // View -> Controller -> Model
    processView(args) {
        model.dataUpdate(args);
    }

    // Defines the handlers for each button
    handlers = {
        tiktok_handler: () => {
            const id = 'tiktok'
            this.open_platform(id);
            this.processView(id);
        },
        youtube_handler: () => {
            this.open_platform('youtube');
        },
        twitch_handler: () => {
            this.open_platform('twitch');
        },
        twitter_handler: () => {
            this.open_platform('twitter');
        },
        instagram_handler: () => {
            this.open_platform('instagram');
        }
    }

    // Defines how to open a platform
    open_platform(platform) {
        // Get the url
        const url = model.platforms[platform];
        // Open the url in a new tab
        window.open(url, "_blank");
    }

}

function init() {
    model = new Model();
    view = new View();
    controller = new Controller();
}

window.addEventListener('load', init);