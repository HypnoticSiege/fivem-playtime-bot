module.exports = (client, message) => {
    const config = require('../config')
    if (message.author.bot) return;
    if (message.content.indexOf(config.bot.prefix) !== 0) return;
    const args = message.content.slice(config.bot.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    if (!cmd) return;
    cmd.run(client, message, args);
};