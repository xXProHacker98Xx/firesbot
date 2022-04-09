const Discord = require("discord.js");
const express = require("express")
const app = express()
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
app.enable("trust proxy")
app.set("etag", false)
app.use(express.static(__dirname + "/website"))
client.on("messageCreate", message => {
    if (message.content == "!twitch") {
        message.channel.send("@everyone Fenyx è in live con una nuovissima cacata pazzurdissimerrima: https://www.twitch.tv/zfenyyx")
    }

    if (message.content == "!spotify") {
        message.channel.send("Questa è la playlist di fenyx: https://open.spotify.com/playlist/0E0u0bHwzFolFaes7uG41v?si=b91dd9b07111471f")
    }
});
///////////////////////////


// dashboard/website ///
app.use((reg, res, next) => {
    console.log(`- ${req.method}: ${req.url} ${res.statusCode} ( by: ${req.ip} )`)
    next()
})


app.get("/", async (req, res) => {
    res.send("CIAO MONDO")
})

app.listen(process.env.PORT || 90, () => console.log(`App on port ${process.env.PORT || 90}`))