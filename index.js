const Discord = require("discord.js");
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]});

client.login(process.env.token)

client.on("ready", () => {
    console.log("Il bot è online");
    client.user.setActivity("Sta guardando zFenyyx", {
        type: "STREAMING",
        url: "https://www.twitch.tv/zfenyyx"
    });
});

client.on('guildMemberAdd', async(member) => {
    const Channel = member.guild.channels.cache.get('962419220241604678')
    const embed = new MessageEmbed()
        .setColor('ORANGE')
        .setTitle('New Member')
        .setDescription(`**${member.displayName}** ciao carissimo e benvenuto tra di noi ${member.guild.name}, sei il ${member.guild.memberCount} membro!`)
    Channel.send(embed)
})
client.on('guildMemberRemove', async(member) => {
    const Channel = member.guild.channels.cache.get('962419220241604678')
    const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle('A member left the server :(')
        .setDescription(`**${member.displayName}** ha disertato, riportatelo al fronte con noi`)
    // sends a message to the channel
    Channel.send(embed)
});

client.on("messageCreate", message => {
    if (message.content == "!twitch") {
        message.channel.send("@everyone Fenyx è in live con una nuovissima cacata pazzurdissimerrima: https://www.twitch.tv/zfenyyx")
    }

    if (message.content == "!spotify") {
        message.channel.send("Questa è la playlist di fenyx: https://open.spotify.com/playlist/0E0u0bHwzFolFaes7uG41v?si=b91dd9b07111471f")
    }
});