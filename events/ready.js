const mongo = require('../mongo')
const Discord = require('discord.js')
const { prefix } = require("./token.json")
module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity("Heists || .help", {type:"WATCHING"})
    
    client.on("message" , msg => {
    if(msg.content == prefix + "servers") => {
        client.guilds.cache.forEach((guild) => {
            console.log(guild)
        })    
    })
    await mongo()
}
