const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "reset",
    description: "reset the channel perms",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have enough perms to use this cmd!")
        const channel = message.mentions.channels.first()
        if (!channel.parent) {
	return console.log('This channel is not listed under a category')
        let embed = new MessageEmbed()
        .setColor(0xFF0000)
        .setTitle("Reset Done😵‍💫")
        .setDescription(`<a:RedVerified:789502869019557918> Everyone one can view`)
        .setTimestamp()
        channel.lockPermissions()
	.then(() => console.log('Successfully synchronized permissions with parent channel'))
	.catch(console.error)
        await channel.send(embed)
    }
}




