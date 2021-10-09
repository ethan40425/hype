module.exports = {
    name: "Get Button Info",

    description: "Gets the button information.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member to get the information.",
            "types": ["object", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "button_info",
            "name": "Button Info",
            "description": "Description: The member information to get.",
            "type": "SELECT",
            "options": {
                1: "The custom id who you provided [Text]",
                2: "The server where the button is clicked [Server]",
                3: "The channel where the button is clicked [Channel]",
                4: "The button clicker [User]",
                5: "The button message [Message]",
                6: "If the button already has an answer [Boolean]"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "result",
            "name": "Result",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the member.",
            "types": ["unspecified"]
        }
    ],

    code(cache) {
        const button = this.GetInputValue("button", cache);
        const button_info = parseInt(this.GetOptionValue("button_info", cache));

        let result;
        switch(button_info) {
            case 1:
                result = button.id;
                break;
            case 2:
                result = button.guild;
                break;
            case 3:
                result = button.channel;
                break;
            case 4:
                result = button.clicker.user;
                break;
            case 5:
                result = button.message;
                break;
            case 6:
                result = button.deffered;
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
}