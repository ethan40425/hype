module.exports = {
    name: "Create Button Thinking",

    description: "Create the message that the bot are thinking about",

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
        },
        {
            "id": "ephemeral",
            "name": "Enable Ephemeral",
            "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: If you want the message ephemeral. (OPTIONAL)",
            "types": ["boolean", "unspecified"]
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
            "id": "awnser",
            "name": "Awnser",
            "description": "Type: Object\n\nDescription: The Awnser Message.",
            "types": ["object"]
        }
    ],

    async code(cache) {
        const button = this.GetInputValue("button", cache);
        const ephemeral = Boolean(this.GetInputValue("ephemeral", cache));
		
		if(ephemeral) awnser = await button.think(true);
		if(!ephemeral) awnser = await button.think(); 
		
		this.StoreOutputValue(awnser, "awnser", cache);
		this.RunNextBlock("action", cache);

    }
}