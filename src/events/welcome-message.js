require('dotenv').config();

const personalMessage = require('../assets/personalWelcomeMessage.json');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const messagePersonal = personalMessage.bericht.replace("[naam]", member.user.username);

        member.send(messagePersonal)
            .then(() => channel.send(`${messageMain} ${member}`))
            .catch(console.error);
    },
};