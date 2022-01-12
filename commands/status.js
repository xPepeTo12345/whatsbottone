//jshint esversion:8
const execute = async (client, msg) => {
    msg.delete(true);
    msg.reply("╔═══════════════════════════╗");
    msg.reply("Server #1 (API) (100% Uptime)");
    msg.reply("◖■■■■■■■■■■■■■■■■■■■■■◗ 100%");
    msg.reply("Server #2 (100% Uptime)");
    msg.reply("◖■■■■■■■■■■■■■■■■■■■■■◗ 100%");
    msg.reply("Server #3 (100% Uptime)");
    msg.reply("◖■■■■■■■■■■■■■■■■■■■■■◗ 90% ");
    msg.reply("*╚═══════════════════════════╝*");
};
module.exports = {
    name: 'Status',
    description: 'status server',
    command: '!status',
    commandType: 'info',
    isDependent: false,
    help: 'status server',
    execute};