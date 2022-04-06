const Discord = require("discord.js");
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]});

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot ONLINE")
    const updatePresence = async (client, state) => {
        // Set the presence
        const activity = {
            name: 'Notizie',
            type: 'STA GUARDANDO ZFENYYX',
            details: 'https://discord.com/invite/KPFTDd7NhB',
            state: state,
            timestamps: {
                start: Date.now(),
            },
         };
        client.user.setPresence({
            pid: process.pid,
            activity: activity,
            status: 'online',
        });
    };
});

client.on("messageCreate", message => {
    if (message.content == "!twitch") {
        message.channel.send("@everyone Fenyx è in live con una nuovissima cacata pazzurdissimerrima:https://www.twitch.tv/zfenyyx")
    }

    if (message.content == "!spotify") {
        message.channel.send("Questa è la playlist di fenyx:https://open.spotify.com/playlist/0E0u0bHwzFolFaes7uG41v?si=b91dd9b07111471f")
    }
});