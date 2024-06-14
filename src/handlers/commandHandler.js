const { commands } = require('../commands/export');

function loadCommands(client) {
    for (const command of Object.values(commands)) {
        client.commands.set(command.data.name, command);
    }

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    });
}

module.exports = { loadCommands };
