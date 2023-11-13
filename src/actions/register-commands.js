require('dotenv').config();

const { REST, Routes } = require('discord.js');

const bard = require('./bard')

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    bard.data.toJSON()
]

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

const registerCommands = async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
};

module.exports = registerCommands