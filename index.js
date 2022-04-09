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

client.on("guildMemberAdd", member => {
    const canale = member.guild.channels.cache.get(config.canali.welcom);
    canale.send(`<@${member.id}> Ciao carissimo e benvenuto tra di noi!`)

    const ruolo = member.guild.roles.cache.find(r => r.name === "𝓟𝓲𝓬𝓬𝓲𝓸𝓕𝓲𝓪𝓶𝓶𝓪🐥🔥")
    member.roles.add(ruolo);
})

client.on("messageCreate", message => {
    if (message.content == "!twitch") {
        message.channel.send("@everyone Fenyx è in live con una nuovissima cacata pazzurdissimerrima: https://www.twitch.tv/zfenyyx")
    }

    if (message.content == "!spotify") {
        message.channel.send("Questa è la playlist di fenyx: https://open.spotify.com/playlist/0E0u0bHwzFolFaes7uG41v?si=b91dd9b07111471f")
    }
});