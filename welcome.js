module.exports = (client) => {
    const channelID = "962419220241604678"
    client.on("guildMemberAdd", (member) => {
        console.log(member);

        const message = `<@${member.id}> 𝘾𝙞𝙖𝙤 𝙘𝙖𝙧𝙞𝙨𝙨𝙞𝙢𝙤 𝙚 𝙗𝙚𝙣𝙫𝙚𝙣𝙪𝙩𝙤 𝙩𝙧𝙖 𝙙𝙞 𝙣𝙤𝙞
        𝙇𝙖 𝙩𝙖𝙣𝙖 𝙙𝙚𝙡𝙡𝙚 𝙁𝙚𝙣𝙮𝙘𝙞🔥!`

        const channel = member.guild.channels.cache.get(channelID);
        channel.send(message);
    });
};