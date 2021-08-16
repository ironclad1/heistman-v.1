module.exports = async (Discord, client) => {
    let serverIn = client.guilds.cache.size;
    console.log('bot is online');
    client.user.setPresence({
        status: "online",
        activity: {
            name: `activity name | ${serverIn} servers`,
            type: "WATCHING"
        }
    });
    console.log('connected')
};
