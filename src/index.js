require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');
const logs = require('discord-logs');
const welcome = require('./actions/welcome-message');
const logging = require('./actions/logging-system');
const commands = require('./actions/commands');
const { OpenAI } = require('openai')

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
    commands(client);
});

//openai
const IGNORE_PREFIX = '!';

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id !== process.env.CHANNEL_ID_ASKJEZUS) return;
    if (message.content.startsWith(IGNORE_PREFIX)) return;

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                // name: ,
                role: 'system',
                content: 'Chat GPT is pretending to be jezus and all responses should imitate jezus',
            },
            {
                // name: ,
                role: 'user',
                content: message.content,
            }
        ]
    }).catch((error) => console.error('OpenAI error: \n', error));

    message.reply(respone.choices[0].message.content)
});

//extra
client.on('messageCreate', (message) => {
    if (message.content.includes('ewout') && message.author.bot === false) {
        message.reply('ewout stinkt!');
    }

    if (message.content.includes('arne') && message.author.bot === false) {
        message.reply('arne is gay!');
    }
});