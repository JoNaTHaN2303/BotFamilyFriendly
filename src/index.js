require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { loadCommands } = require('./handlers/commandHandler');
const { loadEvents } = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Map();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    loadCommands(client);
    loadEvents(client);
});

client.login(process.env.DISCORD_TOKEN);