module.exports = {
    name: "Delete Button Thinking",

    description: "Deletes the message that the bot are thinking about",

    category: "Button Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "awnser",
            "name": "Awnser",
            "description": "Acceptable Types: Object\n\nDescription: The Awnser Objekt",
            "types": ["object", "unspecified"],
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
        }
    ],

    async code(cache) {
		const awnser = this.GetInputValue("awnser", cache);
		
		await awnser.delete().catch(() => {
			this.RunNextBlock("action", cache);
			});;
		
		this.RunNextBlock("action", cache);

    }
}