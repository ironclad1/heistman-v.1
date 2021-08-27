const mongo = require('../mongo')
const Discord = require('discord.js')


module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online!`);
    const arrayOfStatus = [
        `Over ${client.guilds.cache.size} servers!`,
        `Heists || .help`,
        `${client.users.cache.size} members going brr`
  //  client.user.setActivity("Heists || .help", {type:"PLAYING"})
   ];
    let index = 0;
    setInterval(() => {
     if(index === arrayOfStatus.length) index=0;
     const status = arrayOfStatus[index];
     client.user.setActivity(status, {type:"WATCHING"}).catch(console.error)
     index++;
    }, 5000)
    
    
    await mongo()
}
