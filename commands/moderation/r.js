const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "r",
    description: "reset the channel perms",
    run: async(client, message, args) => {
        if(!message.member.roles.cache.some(r=>["Heist Manager", "HEIST STARTER", "heist manager", "heist starter", "HEIST MANAGER", "Heist Starter", "⊹𓂃heist manager", "🧿・𝐂𝐨𝐮𝐩𝐥𝐞𝐬"].includes(r.name)) ) return message.reply("You do not have `HEIST STARTER` or `HEIST MANGER` role")
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



