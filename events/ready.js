const mongo = require('../mongo')
const Discord = require('discord.js')


module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity("Heists || .help", {type:"PLAYING"})
    
    let prefix = '.';
    client.on("message" , msg => {
    if(msg.content == prefix + "servers") {
        client.guilds.cache.forEach((guild) => {
            mesg.channel.send(guild.name)
            msg.channel.send(guild.id)
        })
       }
    })
    await mongo()
}
