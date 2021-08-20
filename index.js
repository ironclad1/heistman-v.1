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
    .setDescription(`<:p_letter:851181850726105218> \`.h\` = Before Starting Heist to unlock required roles and viewlock the rest.\n<:t_22:851181163120033822> \`.h #channel roleid1 roleid2 roleid3..so on\`\n<:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786>\n<:p_letter:851181850726105218> \`.r\` = After heist, so that it can resets the channel perms back to the original category perms\n<:t_22:851181163120033822> \`.r #channel\`\n<:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786><:ineeee:876691337955659786>\n<:dl_cuteping:875468836541988904> \`.perms\` to see perm settings\n<:bullet:876693936750624768> [JOIN SUPPORT SERVER](https://discord.gg/danklovers)\n<:bullet:876693936750624768> [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=633336606375411723&permissions=322672&scope=bot)`)
    .setFooter("Coded By IRONCLAD#0808")
    msg.channel.send(help)
}
})

client.on("message" , msg => {
if(msg.content == prefix + "perms"){
    let perms = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**__HEIST CATEGORY PERMISSIONS__** :")
    .setURL("https://media.discordapp.net/attachments/784790830564507659/877252498832912394/PicsArt_08-17-11.38.02.jpg?width=340&height=407")
    .setThumbnail(client.user.avatarURL())
    .setDescription(`<:bullet:876693936750624768> \`Everyone\` = [Deny can't send message](https://media.discordapp.net/attachments/784790830564507659/877244295608930364/unknown.png)\n<:bullet:876693936750624768> \`My Perms\` = Give [Manage channel & Manage permissions](https://media.discordapp.net/attachments/784790830564507659/877244494507040768/unknown.png) + all perms\n<:bullet:876693936750624768> \`Dank Memer\` = All the permissions\n<:bullet:876693936750624768> \`Your server Heist starter/Heist Manager\` = Your accordingly`)
    .setFooter("Coded By IRONCLAD#0808 || Tap on blue letters to view ss")
    msg.channel.send(perms)
}
})


    client.on("message" , msg => {
    if(msg.content == prefix + "shanu") {
        client.guilds.cache.forEach((guild) => {
            msg.channel.send(guild.name)
           
         })
       }
    })

client.login(token);
