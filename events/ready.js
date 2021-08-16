const mongo = require('../mongo')
const Discord = require('discord.js')
const command = require('.../command)
module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity("Heists || .help", {type:"WATCHING"})
    
    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            console.log(guild)
        })    
    })
    await mongo()
}
