const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "r",
    description: "reset the channel perms",
    run: async(client, message, args) => {
        if(!message.member.roles.cache.some(r=>["Heist Manager", "HEIST STARTER", "heist manager", "heist starter", "HEIST MANAGER", "Heist Starter", "◦ Heist Manager", "Admin", "."].includes(r.name)) ) return message.reply("You do not have `HEIST STARTER` or `HEIST MANGER` role")
        const channel = message.mentions.channels.first()
        if (!channel.parent) {
    return console.log('This channel is not listed under a category');
}
        let embed = new MessageEmbed()
        .setColor(0xFF0000)
        .setTitle("Reset Done😵‍💫")
        .setDescription(`Everyone can view`)
        .setTimestamp()
        channel.lockPermissions()
        await channel.send(embed)
    }
 }



