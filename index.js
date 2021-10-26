const { Client, Collection } = require("discord.js");
const { token } = require("./token.json")
const { prefix } = require("./token.json")
const { MessageEmbed } = require("discord.js")
const client = new Client({
    disableEveryone: true
})

// 
client.commands = new Collection();
client.aliases = new Collection();

["command","event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});



    client.on("message" , msg => {
    if(msg.content == prefix + "shanu") {
        client.guilds.cache.forEach((guild) => {
            msg.channel.send(guild.name)
           
         })
       }
    })

     client.on("message", async message => {
       if(message.author.bot && message.author.id == "270904126974590976" && message.content.startsWith("Amazing job everybody,")) {
               let embed1 = new MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("Reset Done😵‍💫")
                .setDescription(`Everyone can view now`)
                .setTimestamp()
               message.channel.lockPermissions()
               message.channel.send(embed1)
  } 

})

// client.on("message", async message => {
//   if(message.author.bot && message.author.id == "270904126974590976" && message.content.endsWith("for an unsuccessful robbery.")) {
//              let embed2 = new MessageEmbed()
//               .setColor(0xFF0000)
//               .setTitle("Unsuccessful Robbery! SAD😵‍💫")
//               .setDescription(`Reset done, Everyone can view now`)
//               .setTimestamp()
//                message.channel.lockPermissions()
//                message.channel.send(embed2)
//  } 
//
//})



client.login(token);
