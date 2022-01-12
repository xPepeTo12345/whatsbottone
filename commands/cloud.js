const logger = require("../logger");
const execute = async (client, msg) => {
    if (!msg.to.includes("-")) {
        let chat = await msg.getChat();
        let contact = await chat.getContact();
        await logger(client, "test")
    }
};

module.exports = {
    name: "Cloud", //name of the module
    description: "save image or msg in module", // short description of what this command does
    command: "!cloud", //command with prefix. Ex command: '!test'
    commandType: "admin", //
    isDependent: false, //whether this command is related/dependent to some other command
    help: "save image or msg in cloud", // a string descring how to use this command Ex = help : 'To use this command type !test arguments'
    execute,
};
