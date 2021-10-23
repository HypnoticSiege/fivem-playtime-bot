module.exports = async(client) => {
    console.log(`\n> Logging in...`)
    console.log(`> Logged in as ${client.user.tag}`)
    //console.log(`> Fetching Data from ${client.db}`)
    console.log(`> Working on ${client.guilds.cache.size} Guilds`)
    console.log(`> Loaded ${client.NumOfCommands} External Commands!`)
    console.log(`> Loaded ${client.NumOfEvents} External Events`)
    console.log(`[Bot Created by HypnoticSiege#2909 & Script by JokeDevil#0251]`)
}