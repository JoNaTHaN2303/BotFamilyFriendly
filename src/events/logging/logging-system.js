require('dotenv').config();
const { EmbedBuilder } = require('discord.js');

module.exports = (client) => {
    // Channel Topic Updating 
    client.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {
        
        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const TopicUpdate = new EmbedBuilder()
            .setTitle('Topic Updated!')
            .setColor('#2F3136')
            .setDescription(`${channel} Topic changed from **${oldTopic}** to **${newTopic}**`);

        return LogChannel.send({
            embeds: [TopicUpdate]
        });

    });

    // Channel Permission Updating
    client.on("guildChannelPermissionsUpdate", (channel, oldPermissions, newPermissions) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const PermissionUpdate = new EmbedBuilder()
            .setTitle('Permission Updated!')
            .setColor('#2F3136')
            .setDescription(`${channel.name}'s permissions updated!"`);

        return LogChannel.send({
            embeds: [PermissionUpdate]
        });

    })

    // unhandled Guild Channel Update
    client.on("unhandledGuildChannelUpdate", (oldChannel, newChannel) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const unhandledGuildChannelUpdate = new EmbedBuilder()
            .setTitle('Channel Updated!')
            .setColor('#2F3136')
            .setDescription("Channel '" + oldChannel.id + "' was edited but discord-logs couldn't find what was updated...");

        return LogChannel.send({
            embeds: [unhandledGuildChannelUpdate]
        });

    });

    // Member Started Boosting
    client.on("guildMemberBoost", (member) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MemberBoost = new EmbedBuilder()
            .setTitle('User Started Boosting!')
            .setColor('#2F3136')
            .setDescription(`**${member.user.tag}** has started boosting  ${member.guild.name}!`);
        return LogChannel.send({
            embeds: [MemberBoost]
        });

    })

    // Member Unboosted
    client.on("guildMemberUnboost", (member) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MemberUnboost = new EmbedBuilder()
            .setTitle('User Stoped Boosting!')
            .setColor('#2F3136')
            .setDescription(`**${member.user.tag}** has stopped boosting  ${member.guild.name}!`);

        return LogChannel.send({
            embeds: [MemberUnboost]
        });

    })

    // Member Got Role
    client.on("guildMemberRoleAdd", (member, role) => {
        
        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MemberRoleAdd = new EmbedBuilder()
            .setTitle('User Got Role!')
            .setColor('#2F3136')
            .setDescription(`**${member.user.tag}** got the role \`${role.name}\``);

        return LogChannel.send({
            embeds: [MemberRoleAdd]
        });

    })

    // Member Lost Role
    client.on("guildMemberRoleRemove", (member, role) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MemberRoleRemove = new EmbedBuilder()
            .setTitle('User Lost Role!')
            .setColor('#2F3136')
            .setDescription(`**${member.user.tag}** lost the role \`${role.name}\``);

        return LogChannel.send({
            embeds: [MemberRoleRemove]
        });

    })

    // Nickname Changed
    client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const MemberNicknameUpdate = new EmbedBuilder()
            .setTitle('Nickname Updated')
            .setColor('#2F3136')
            .setDescription(`${member.user.tag} changed nickname from \`${oldNickname}\` to \`${newNickname}\``);

        return LogChannel.send({
            embeds: [MemberNicknameUpdate]
        });

    })

    // Member Joined
    client.on("guildMemberEntered", (member) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MemberJoined = new EmbedBuilder()
            .setTitle('User Joined')
            .setColor('#2F3136')
            .setDescription(`${member.user.tag} Joined!`);

        return LogChannel.send({
            embeds: [MemberJoined]
        });

    })

    // Server Boost Level Up
    client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const LevelUp = new EmbedBuilder()
            .setTitle('Server Boost Level Up')
            .setColor('#2F3136')
            .setDescription(`${guild.name} reached the boost level ${newLevel}`);

        return LogChannel.send({
            embeds: [LevelUp]
        });

    })

    // Server Boost Level Down
    client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const LevelDown = new EmbedBuilder()
            .setTitle('Server Boost Level Down')
            .setColor('#2F3136')
            .setDescription(`${guild.name} lost a level from ${oldLevel} to ${newLevel}`);

        return LogChannel.send({
            embeds: [LevelDown]
        });

    })

    // Banner Added
    client.on("guildBannerAdd", (guild, bannerURL) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const BannerAdd = new EmbedBuilder()
            .setTitle('Server Got a new banner')
            .setColor('#2F3136')
            .setImage(bannerURL)

        return LogChannel.send({
            embeds: [BannerAdd]
        });

    })

    // AFK Channel Added
    client.on("guildAfkChannelAdd", (guild, afkChannel) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const AFKAdd = new EmbedBuilder()
            .setTitle('AFK Channel Added')
            .setColor('#2F3136')
            .setDescription(`${guild.name} has a new afk channel ${afkChannel}`);

        return LogChannel.send({
            embeds: [AFKAdd]
        });

    })

    // Guild Vanity Add
    client.on("guildVanityURLAdd", (guild, vanityURL) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const VanityAdd = new EmbedBuilder()
            .setTitle('Vanity Link Added')
            .setColor('#2F3136')
            .setDescription(`${guild.name} has a vanity link ${vanityURL}`);

        return LogChannel.send({
            embeds: [VanityAdd]
        });

    })

    // Guild Vanity Remove
    client.on("guildVanityURLRemove", (guild, vanityURL) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const VanityRemove = new EmbedBuilder()
            .setTitle('Vanity Link Removed')
            .setColor('#2F3136')
            .setDescription(`${guild.name} has removed its vanity URL ${vanityURL}`);

        return LogChannel.send({
            embeds: [VanityRemove]
        });

    })

    // Guild Vanity Link Updated
    client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const VanityUpdated = new EmbedBuilder()
            .setTitle('Vanity Link Updated')
            .setColor('#2F3136')
            .setDescription(`${guild.name} has changed its vanity URL from ${oldVanityURL} to ${newVanityURL}!`);

        return LogChannel.send({
            embeds: [VanityUpdated]
        });

    })

    // Message Pinned
    client.on("messagePinned", (message) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MessagePinned = new EmbedBuilder()
            .setTitle('Message Pinned')
            .setColor('#2F3136')
            .setDescription("This message has been pinned : " + message);

        return LogChannel.send({
            embeds: [MessagePinned]
        });

    })

    // Message Edited
    client.on("messageContentEdited", (message, oldContent, newContent) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MessageEdited = new EmbedBuilder()
            .setTitle('Message Edited')
            .setColor('#2F3136')
            .setDescription(`Message Edited from \`${oldContent}\` to \`${newContent}\``);

        return LogChannel.send({
            embeds: [MessageEdited]
        });

    })

    // Member Became Offline
    client.on("guildMemberOffline", (member, oldStatus) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MemberOffline = new EmbedBuilder()
            .setTitle('Message Offline')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " became offline!");

        return LogChannel.send({
            embeds: [MemberOffline]
        });

    })

    // Member Became Online
    client.on("guildMemberOnline", (member, newStatus) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const MemberOnline = new EmbedBuilder()
            .setTitle('Message Online')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " was offline and is now " + newStatus + "!");

        return LogChannel.send({
            embeds: [MemberOnline]
        });

    })

    // Role Position Updated
    client.on("rolePositionUpdate", (role, oldPosition, newPosition) => {
        
        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const RolePositionUpdated = new EmbedBuilder()
            .setTitle('Role Position Updated')
            .setColor('#2F3136')
            .setDescription(role.name + " role was at position " + oldPosition + " and now is at position " + newPosition);

        return LogChannel.send({
            embeds: [RolePositionUpdated]
        });

    })

    // Role Permission Updated
    client.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const RolePermissionUpdated = new EmbedBuilder()
            .setTitle('Role Permission Updated')
            .setColor('#2F3136')
            .setDescription(role.name + " had as permissions " + oldPermissions + " and now has as permissions " + newPermissions);

        return LogChannel.send({
            embeds: [RolePermissionUpdated]
        });

    })

    // Avatar Updated
    client.on("userAvatarUpdate", (user, oldAvatarURL, newAvatarURL) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const AvatarUpdated = new EmbedBuilder()
            .setTitle('Avatar Updated')
            .setColor('#2F3136')
            .setDescription(`${user.tag} updated avatar from [Old Avatar](${oldAvatarURL}) to [New Avatar(${newAvatarURL})]`);

        return LogChannel.send({
            embeds: [AvatarUpdated]
        });

    })

    // Username Updated
    client.on("userUsernameUpdate", (user, oldUsername, newUsername) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const Username = new EmbedBuilder()
            .setTitle('Username Updated')
            .setColor('#2F3136')
            .setDescription(`${user.tag} updated thier username from ${oldUsername} to ${newUsername}`);

        return LogChannel.send({
            embeds: [Username]
        });

    })

    // Discriminator Updated
    client.on("userDiscriminatorUpdate", (user, oldDiscriminator, newDiscriminator) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const Discriminator = new EmbedBuilder()
            .setTitle('Discriminator Updated')
            .setColor('#2F3136')
            .setDescription(`${user.tag} updated thier discriminator from ${oldDiscriminator} to ${oldDiscriminator}`);

        return LogChannel.send({
            embeds: [Discriminator]
        });

    })

    // Flags Updated
    client.on("userFlagsUpdate", (user, oldFlags, newFlags) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_AUDIT_LOG);
        const FlagsUpdate = new EmbedBuilder()
            .setTitle('Flags Updated')
            .setColor('#2F3136')
            .setDescription(`${user.tag} updated thier flags from ${oldFlags} to ${newFlags}`);

        return LogChannel.send({
            embeds: [FlagsUpdate]
        });

    })

    // Joined VC
    client.on("voiceChannelJoin", (member, channel) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const VCJoined = new EmbedBuilder()
            .setTitle('Voice Channel Joined')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " joined " + `${channel}` + "!");

        return LogChannel.send({
            embeds: [VCJoined]
        });

    })

    // Left VC
    client.on("voiceChannelLeave", (member, channel) => {
        
        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const VCLeft = new EmbedBuilder()
            .setTitle('Voice Channel Left')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " left " + `${channel}` + "!");

        return LogChannel.send({
            embeds: [VCLeft]
        });

    })

    // VC Switch
    client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const VCSwitch = new EmbedBuilder()
            .setTitle('Voice Channel Switched')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " left " + oldChannel.name + " and joined " + newChannel.name + "!");

        return LogChannel.send({
            embeds: [VCSwitch]
        });

    })

    // VC Mute
    client.on("voiceChannelMute", (member, muteType) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const VCMute = new EmbedBuilder()
            .setTitle('User Muted')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " became muted! (type: " + muteType + ")");

        return LogChannel.send({
            embeds: [VCMute]
        });

    })

    // VC Unmute
    client.on("voiceChannelUnmute", (member, oldMuteType) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const VCUnmute = new EmbedBuilder()
            .setTitle('User Unmuted')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " became unmuted! (type: " + oldMuteType + ")");

        return LogChannel.send({
            embeds: [VCUnmute]
        });

    })

    // VC Defean
    client.on("voiceChannelDeaf", (member, deafType) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const VCDeafen = new EmbedBuilder()
            .setTitle('User Deafend')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " become deafed! (type: " + deafType + ")");

        return LogChannel.send({
            embeds: [VCDeafen]
        });

    })

    // VC Undefean
    client.on("voiceChannelUndeaf", (member, deafType) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const VCUndeafen = new EmbedBuilder()
            .setTitle('User Undeafend')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " become undeafed! (type: " + deafType + ")");

        return LogChannel.send({
            embeds: [VCUndeafen]
        });

    })

    // User Started to Stream
    client.on("voiceStreamingStart", (member, voiceChannel) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const UserStreaming = new EmbedBuilder()
            .setTitle('User Started to Stream')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " started streaming in " + voiceChannel.name);

        return LogChannel.send({
            embeds: [UserStreaming]
        });
        
    })

    // User Stopped to Stream
    client.on("voiceStreamingStart", (member, voiceChannel) => {

        const LogChannel = client.channels.cache.get(process.env.CHANNEL_ID_USERS_LOG);
        const UserStoppedStreaming = new EmbedBuilder()
            .setTitle('User Stopped to Stream')
            .setColor('#2F3136')
            .setDescription(member.user.tag + " stopped streaming in " + voiceChannel.name);

        return LogChannel.send({
            embeds: [UserStoppedStreaming]
        });

    })
}


