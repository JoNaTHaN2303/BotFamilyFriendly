const { events } = require('../events/export');

function loadEvents(client) {
    for (const event of Object.values(events)) {
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}

module.exports = { loadEvents };
