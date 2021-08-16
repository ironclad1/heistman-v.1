module.exports.run = (client) => {
    console.log('${client.user.tag} is op');
    
    client.user.setActivity("Heists"), {type:"WATCHING"})
}
