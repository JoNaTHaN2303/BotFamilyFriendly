require('dotenv').config();

const personalMessage = require('../assets/personalWelcomeMessage.json');
const joiningMessages = require('../assets/mainWelcomeMessage.json');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const messagePersonal = personalMessage.bericht.replace("[naam]", member.user.username);
        const messageMain = joiningMessages[Math.floor(Math.random() * joiningMessages.length)];
        const channel = member.guild.channels.cache.get(process.env.CHANNEL_ID_WELCOME);

        if (channel) {
            member.send(messagePersonal)
                .then(() => channel.send(`${messageMain} ${member}`))
                .catch(console.error);
        }
    },
};