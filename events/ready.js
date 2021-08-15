module.exports = async (client) => {
 
   client.user.setPresence({ activities: [{ name: 'with Heists' }], status: 'idle' });

}
   
