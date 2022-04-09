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
client.on("guildMemberAdd", (member) => {
    let channelId = "962419220241604678";
    if(member.guild.id != "962419220241604678") return;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Utente Entrato!!`)
    .setDescription(`${member.user.tag} Ciao arissimo e benvenuto tra di noi`)
    .setColor("ORANGE")
    .setTimestamp()
    channelId.send(embed)
})
client.on("messageCreate", message => {
    if (message.content == "!twitch") {
        message.channel.send("@everyone Fenyx è in live con una nuovissima cacata pazzurdissimerrima: https://www.twitch.tv/zfenyyx")
    }

    if (message.content == "!spotify") {
        message.channel.send("Questa è la playlist di fenyx: https://open.spotify.com/playlist/0E0u0bHwzFolFaes7uG41v?si=b91dd9b07111471f")
    }
});