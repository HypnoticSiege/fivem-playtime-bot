const request = require('request');
const format = require('../util/format');

module.exports.run = async (client, message, args) => {
    const steamHex = args.join(" ");
    const url = client.db

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error) console.error(error)
        if (!error && response.statusCode === 200) {
            const playTime = body[`steam:${steamHex}`].playTime
            const formatted = format(playTime)
            client.embed(
                message.channel,
                `✅ Playtime Check`,
                `That Player has ${formatted} within the server!`
            )
        }
    })
}