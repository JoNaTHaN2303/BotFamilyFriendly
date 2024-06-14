require('dotenv').config();
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildChannelTopicUpdate',
    execute(channel, oldTopic, newTopic, client) {
        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const TopicUpdate = new EmbedBuilder()
            .setTitle('Topic Updated!')
            .setColor('#2F3136')
            .setDescription(`${channel} Topic changed from **${oldTopic}** to **${newTopic}**`);

        return LogChannel.send({
            embeds: [TopicUpdate]
        });
    },
};
