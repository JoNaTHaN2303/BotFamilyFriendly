require('dotenv').config();
const bard = require('./bard')

module.exports = (client) => {
    client.on('interactionCreate', async (interaction) => {
        if(!interaction.isChatInputCommand()) return;
    
        if(interaction.commandName === 'ping') {
            interaction.reply('Pong!');
        }

        if (interaction.commandName === 'jezus') {
            await bard.execute(interaction);
        }
    });

    client.on('messageCreate', (message) => {
        if (message.content.includes('ewout') && message.author.bot === false) {
            message.reply('ewout stinkt!');
        }
    
        if (message.content.includes('arne') && message.author.bot === false) {
            message.reply('arne is gay!');
        }
    });
}