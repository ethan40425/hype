module.exports = {
    name: "End Button Action",

    description: "Is required to end a button interation.",

    category: "Button Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "button",
            "name": "Button",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The text to put in the message. (OPTIONAL)",
            "types": ["object"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "error",
            "name": "Error",
            "description": "Type: Object, List\n\nDescription: Error messsage.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const button = this.GetInputValue("button", cache);

        button.defer().catch(error => {
            this.StoreOutputValue(error.message, "error", cache);
            this.RunNextBlock("action", cache);
        });
        this.RunNextBlock("action", cache);
    }
}