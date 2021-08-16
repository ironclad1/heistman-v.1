const mongo = require('../mongo')
const Discord = require('discord.js')


module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity("Heists || .help", {type:"PLAYING"})
    
    let prefix = '.';
    client.on("message" , msg => {
    if(msg.content == prefix + "servers") {
        client.guilds.cache.forEach((guild) => {
            console.log(guild.name)
            console.log(guild.id)
        })
       }
    })
    await mongo()
}
