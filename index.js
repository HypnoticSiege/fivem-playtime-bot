console.clear()

const Discord = require('discord.js')
const Enmap = require("enmap");
const { readdir } = require('fs');;
const config = require('./config')

const client = new Discord.Client()

client.config = config
client.commands = new Enmap()
client.embed = Embed
client.db = config.fivem.protocol + config.fivem.serverIP + ":" + config.fivem.serverPort + "/" + config.fivem.resourceName + "/info"

//Command Handler
readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading ${commandName}...`);
        client.commands.set(commandName, props);
        const NumOfCommands = files.length
        client.NumOfCommands = NumOfCommands
    });
});

//Event Handler
readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        console.log(`Loading ${eventName} Event...`);
        const NumOfEvents = files.length
        client.NumOfEvents = NumOfEvents
    });
});

//Embeds
async function Embed(channel, title, description) {
    const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setThumbnail(client.config.embed.logo)
        .setFooter(client.config.embed.footer)
        .setColor(client.config.embed.color)
        .setTimestamp()

    channel.send(embed)
}


//Status
client.on('ready', () => {
    const statusArray = config.status.array;
    setInterval(() => {
        client.user.setStatus(config.status.option);
        const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
        const status = random[0];
        const mode = random[1];
        client.user.setActivity(status, {
            type: mode
        }, )
    }, config.status.frequency)
})

client.login(config.bot.token)