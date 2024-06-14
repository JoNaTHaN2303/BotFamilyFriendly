const { events } = require('../events/export');

function loadEvents(client) {
    for (const event of Object.values(events)) {
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
    // for (const eventName in events) {
    //     const event = events[eventName];
        
    //     if (eventName === 'Logging') {
    //         // Load audit logging events
    //         for (const auditEventName in event.audit) {
    //             const auditEvent = event.audit[auditEventName];
    //             client.on(auditEventName, (...args) => auditEvent.execute(...args, client));
    //         }

    //         // Load user-related logging events if needed
    //         // for (const userEventName in event.users) {
    //         //     const userEvent = event.users[userEventName];
    //         //     client.on(userEventName, (...args) => userEvent.execute(...args, client));
    //         // }
    //     } else if (event.once) {
    //         client.once(eventName, (...args) => event.execute(...args, client));
    //     } else {
    //         client.on(eventName, (...args) => event.execute(...args, client));
    //     }
    // }
}

module.exports = { loadEvents };
