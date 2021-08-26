const { prefix, devs } = require('../token.json')
module.exports.run = async(client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    
    let command = client.commands.get(cmd);
    

    
   

   //  if (cmd == "h") {
     // if(message.author.bot && message.author.id == "270904126974590976" && message.content.startsWith("Amazing job everybody,")) {
       //     let embed2 = new MessageEmbed()
      //          .setColor(0xFF0000)
      //          .setTitle("Unsuccessful Robbery! SAD😵‍💫")
      //          .setDescription(`Reset done, Everyone can view now`)
      //          .setTimestamp()
      //           message.channel.lockPermissions()
     //            message.channel.send(embed2)
   //     } 
  //   }
  
    
    
    if (command) 
        command.run(client, message, args);

}

