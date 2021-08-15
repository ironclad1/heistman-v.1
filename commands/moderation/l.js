const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "l",
    description: "Locks a given channel for a particular role!",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have enough perms to use this cmd!")
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply("Please mention a valid channel!")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply("Please give a valid role id!")
        let embed = new MessageEmbed()
        .setColor(0xFF0000)
        .setTitle("Channel Viewlocked!")
        .setDescription(`<a:yes:873634857866121266> Done`)
        .setTimestamp()
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        })
        await channel.send(embed)
    }
}
