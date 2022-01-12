//jshint esversion:8
const execute = async (client, msg) => {
    msg.delete(true);
    msg.reply("instagram: @pietrocavaliere_");
	msg.reply("Telegram: @Lampot");
	msg.reply("Numero: +393311167072");
};
module.exports = {
    name: 'social',
    description: 'link social',
    command: '!social',
    commandType: 'info',
    isDependent: false,
    help: 'link social',
    execute};