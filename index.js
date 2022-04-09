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
client.on("guildMemberAdd", (member) =>{
    client.channels.cache.get("793781905740922900").send("𝘾𝙞𝙖𝙤 𝙘𝙖𝙧𝙞𝙨𝙨𝙞𝙢𝙤 𝙚 𝙗𝙚𝙣𝙫𝙚𝙣𝙪𝙩𝙤 𝙩𝙧𝙖 𝙙𝙞 𝙣𝙤𝙞
    𝙇𝙖 𝙩𝙖𝙣𝙖 𝙙𝙚𝙡𝙡𝙚 𝙁𝙚𝙣𝙮𝙘𝙞🔥!" + member.toString() + " benvunuto in **" + member.guild.name + "**\rSei il **" + member.guild.memberCount + "° membro**");
})

client.on("messageCreate", message => {
    if (message.content == "!twitch") {
        message.channel.send("@everyone Fenyx è in live con una nuovissima cacata pazzurdissimerrima: https://www.twitch.tv/zfenyyx")
    }

    if (message.content == "!spotify") {
        message.channel.send("Questa è la playlist di fenyx: https://open.spotify.com/playlist/0E0u0bHwzFolFaes7uG41v?si=b91dd9b07111471f")
    }
});