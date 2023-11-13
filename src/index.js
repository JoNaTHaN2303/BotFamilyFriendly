require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');
const logs = require('discord-logs');

const welcome = require('./actions/welcome-message');
const logging = require('./actions/logging-system');
const commands = require('./actions/commands');
const registerCommands = require('./actions/register-commands');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.GuildVoiceStates,
    ],
});

//Logging system client
logs(client, {
    debug: true
});

client.login(process.env.DISCORD_TOKEN);

client.on('ready', async (c) => {
    welcome(client);
    logging(client);
    commands(client);
    await registerCommands();
    console.log(`${c.user.tag} is ready!`);
});
