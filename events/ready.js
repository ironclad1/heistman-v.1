const mongo = require('../mongo')
module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity("Heists", {type:"WATCHING"})
    await mongo()
}
