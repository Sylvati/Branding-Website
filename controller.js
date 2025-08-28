// Controller
// Should connect the Model and View
// i. e. handle the events
export default class Controller {
    constructor(model, view) {
        // Set the model and view
        this.model = model;
        this.view = view;

        // Subscribes to model updates
        this.model.subscribe(this.processModel);

        // Binds handlers to the view
        this.view.bindHandlers(this.handlers);

        // Initial render
        this.view.render(this.model.data);
    }

    // Process the model updates
    // Model -> Controller -> View
    // Arrow notation automatically binds it to the controller
    processModel = (data) => {
        // Re-render everything, for now
        this.view.render(data);
    }

    // Defines the handlers for each button
    handlers = {
        tiktok_handler: () => {
            const id = 'tiktok'
            this.open_platform(id);
            this.model.logClick(id);
        },
        youtube_handler: () => {
            const id = 'youtube'
            this.open_platform(id);
            this.model.logClick(id);
        },
        twitch_handler: () => {
            const id = 'twitch'
            this.open_platform(id);
            this.model.logClick(id);
        },
        twitter_handler: () => {
            const id = 'twitter'
            this.open_platform(id);
            this.model.logClick(id);
        },
        instagram_handler: () => {
            const id = 'instagram'
            this.open_platform(id);
            this.model.logClick(id);
        }
    }

    // Defines how to open a platform
    open_platform(platform) {
        // Get the url
        const url = this.model.platforms[platform];
        // Open the url in a new tab
        window.open(url, "_blank");
    }

}