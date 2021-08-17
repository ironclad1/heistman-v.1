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
if(msg.content == prefix + "help"){
    let help = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Welcome to My Help Menu :")
    .setThumbnail(client.user.avatarURL())
    .setDescription(`<a:notewaaa:876691551168901180> \`.h\` = Before Starting Heist to unlock required roles and viewlock the rest.\n<a:spark:876691042164965376> \`.h #channel roleid1 roleid2 roleid3..so on\`\n<:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786>\n<a:notewaaa:876691551168901180> \`.r\` = After heist, so that it can resets the channel perms back to the original category perms [\`.perms\` to see perm settings]\n<a:spark:876691042164965376> \`.r #channel\`\n<:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786>\n<:bullet:876693936750624768> [JOIN SUPPORT SERVER](https://discord.gg/danklovers)\n<:bullet:876693936750624768> [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=633336606375411723&permissions=322672&scope=bot)`)
    .setFooter("Coded By IRONCLAD#0808")
    msg.channel.send(help)
}
})

client.on("message" , msg => {
if(msg.content == prefix + "perms"){
    let perms = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("HEIST CATEGORY PERMISSIONS :")
    .setThumbnail(client.user.avatarURL())
    .setDescription(`<:bullet:876693936750624768> \`Everyone\` = [Deny can't send message](https://media.discordapp.net/attachments/784790830564507659/877244295608930364/unknown.png)\n<:bullet:876693936750624768> \`My Perms\` = Give [Manage channel & Manage permissions](https://media.discordapp.net/attachments/784790830564507659/877244494507040768/unknown.png) + all perms\n<:bullet:876693936750624768> \`Dank Memer\` = All the permissions\n<:bullet:876693936750624768> \`Your server Heist starter/Heist Manager\` = Your accordingly`)
    .setFooter("Coded By IRONCLAD#0808")
    msg.channel.send(perms)
}
})

client.login(token);
