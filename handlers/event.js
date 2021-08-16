const { readdirSync } = require('fs')
const ascii = require('ascii-table')

const Discord = require('discord.js');
const client = new Discord.Client();

module.exports= (client, Discord)=>{
    const load_dir = (dir) =>{
        const event_files = readdirSync(`./events/`).filter(file => file.endsWith('.js'));

        for (const file of event_files){
            const event = require(`../events/${file}`)
            const event_name = file.split('.')[0]
            client.on(event_name,event.bind(Discord, client));
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));
}
