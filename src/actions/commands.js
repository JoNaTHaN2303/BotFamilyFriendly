require('dotenv').config();

module.exports = (client) => {
    client.on('interactionCreate', (interaction) => {
        if(!interaction.isChatInputCommand()) return;
    
        console.log(interaction.commandName)
    
        if(interaction.commandName === 'ping') {
            interaction.reply('Pong!');
        }
    });
}