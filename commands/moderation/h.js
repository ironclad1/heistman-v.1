const Discord = require("discord.js")
module.exports = {
    name: "h",
    description: "Unlocks a given channel for a particular role!",
    run: async(client, message, args) => {
        
    
      
        let i;
            let abc = ["Heist Manager", "HEIST STARTER", "heist manager", "heist starter", "HEIST MANAGER", "Heist Starter"]
               for(i=0;i<abc.l;i++){
                if(role.name.includes(abc[i])){
          
              if (!message.member.roles.cache.some(r=>[i].includes(abc)) ) return message.reply("You do not have `HEIST STARTER` or `HEIST MANGER` role")
        } }  
        // const channel = message.mentions.channels.first()
        // if (!channel) {
        //     const invalidEmbed = new Discord.MessageEmbed()
        //     .setColor("RED")
        //     .setTitle("⚠️Invalid Input")
        //     .setDescription(`Command Usage: dankheist <role requirement id> [length]
        //     Command Information: Start a dank member bot heist that has a requirement with channel management.`)

        //     return message.reply(invalidEmbed)
        // }
        let embed = new Discord.MessageEmbed()
            .setColor(0x00FF00)
            .setTitle("Requirement Unlock")
            .setTimestamp()

        const mappedRoles = message.mentions.roles
        const arrayRoles = mappedRoles.array()

        if (arrayRoles.length) {
            for (var r = 0; r < arrayRoles.length; r++) {
                message.channel.updateOverwrite(arrayRoles[r], {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: true
                })
            }
            embed.setDescription(`**Heist Information:-**\n>>> Heist hosted by ${message.author}\nYou must have the ${arrayRoles.join(", ")} role(s) to join\nMake sure to withdraw 2k and get DRUNK!`)
        } else {
            let rolesArray = []
            let process = true
            for (var a = 0; a < args.length; a++) {
                const role = message.guild.roles.cache.get(args[a])
                if (role) {
                    rolesArray.push(role)
                } else {
                    process = false
                }
            }

            if (process) {
                for (var p = 0; p < rolesArray.length; p++) {
                    message.channel.updateOverwrite(rolesArray[p], {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: true
                    })
                }
                embed.setDescription(`**Heist Information:-**\n>>> Heist will be started by ${message.author}\nYou must have the ${rolesArray.join(", ")} role(s) to join\nMake sure to withdraw 2k!`)
            } else {
                const incorrectembed = new Discord.MessageEmbed()
                    .setTitle("One or more role(s) mentioned were incorrect")
                return message.channel.send(incorrectembed)
            }
        }

        message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
            VIEW_CHANNEL: false
        });

        message.channel.send(embed)
     
    
}}
