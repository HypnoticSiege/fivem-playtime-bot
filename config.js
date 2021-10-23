module.exports = {
    //Bot Configuration
    bot: {
        token: '', //Bot Token
        prefix: '!', //Prefix to trigger commands
    },

    //FiveM Configuration
    fivem: {
        protocol: 'http://', //Keep http:// (you shouldnt need https)
        serverIP: 'localhost', //IP of your server, use localhost if bot is running on same server as FiveM one
        serverPort: '30120', //Port of your FiveM Server (Default 30120)
        resourceName: 'Prefech_playTime' //Name of the Playtime Script in your server resources
    },

    //Discord Bot Status Configuration
    status: {
        option: 'online',
        array: [
            'playtimes, WATCHING',
            'FiveM, PLAYING',
            'messages!, WATCHING',
            'to some tunes, LISTENING',
        ],
        frequency: 5000
    },

    //Embed Configuration
    embed: {
        color: 'BLUE', //Color of the Embeds
        footer: '© Hypnotic Development', //Footer of the Embeds
        logo: 'https://cdn.discordapp.com/attachments/898521226845224992/898521587748327465/hypertonicnew.png' //Logo/Thumbnail of the Embed
    },
}