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
    .setDescription(`<a:notewaaa:876691551168901180> \`.h\` = Before Starting Heist to unlock required roles and viewlock the rest.\n<a:spark:876691042164965376> \`.h #channel roleid1 roleid2 roleid3..so on\`\n<:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786>\n<a:notewaaa:876691551168901180> \`.r\` = After heist, so that it can resets the channel perms back to the original category perms\n<a:spark:876691042164965376> \`.r #channel\`\n<:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786>\n<:bullet:876693936750624768> [JOIN SUPPORT SERVER](https://discord.gg/danklovers)\n<:bullet:876693936750624768> [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=633336606375411723&permissions=322672&scope=bot)`)
    .setFooter("Made By IRONCLAD#0808")
    msg.channel.send(help)
}
})

client.login(token);
