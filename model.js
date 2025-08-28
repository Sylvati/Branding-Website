// Model
// Should hold the data
export default class Model {
    constructor() {
        this.platforms = {
            tiktok: "https://www.tiktok.com/@lachmood",
            youtube: "https://www.youtube.com/@LachMood",
            twitch: "https://www.twitch.tv/lachmood",
            twitter: "https://x.com/lachcontent/",
            instagram: "https://www.instagram.com/lachmood/"
        }

        this.log = "Log:\n";

        // Variable holding all data
        this.data = { log: this.log , platforms: this.platforms
        };

        // Controller to listen for updates
        this.subscribers = [];
    }

    // Subscribe to the model updates
    subscribe(callback) {
        this.subscribers.push(callback);
    }

    // Notify all subscribers of an update
    notify() {
        this.subscribers.forEach(callback => callback(this.data));
    }

    // Log clicks of buttons
    logClick(platform) {
        // Update the log
        this.log += `${platform} button clicked!\n`;
        // Update the data
        this.data = { log: this.log , platforms: this.platforms };
        // Notify subscribers of the update
        this.notify();
    }
}