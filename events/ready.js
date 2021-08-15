module.exports = async (client) => {
  
  client.user.setPresence({ activities: [{ name: 'with discord.js' }], status: 'idle' });
}
