require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');
const logs = require('discord-logs');
const welcome = require('./actions/welcome-message');
const logging = require('./actions/logging-system');

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

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready!`);
    welcome(client);
    logging(client);
});


//registering commands
client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'ping') {
        interaction.reply('Pong!');
    }
});

//extra
client.on('messageCreate', (message) => {
    if (message.content === 'ewout' && message.author.bot === false) {
        message.reply('stinkt!');
    }
});