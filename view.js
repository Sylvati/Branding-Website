// View
// Should handle the UI
export default class View {
    constructor() {
        /*
        Get these buttons
        Tiktok, Youtube, Twitch, Twitter, Instagram buttons
        */
        this.buttons = {
            tiktok: document.getElementById("tiktok"),
            youtube: document.getElementById("youtube"),
            twitch: document.getElementById("twitch"),
            twitter: document.getElementById("twitter"),
            instagram: document.getElementById("instagram")
        }
        
        // Gets the log 
        this.log_element = document.getElementById("log");
    }

    // Bind the handlers to each button
    bindHandlers(handlers) {
        // Loop through the dictionary
        Object.entries(this.buttons).forEach(([platform, button]) => {
            button.addEventListener('click', handlers[`${platform}_handler`]);
        });
    }

    // Render site with new data
    render(data) {
        this.log_element.innerText = data.log;
    };
}