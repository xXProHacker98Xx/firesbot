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
const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "server id") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({ format: "png" }))
  .setColor("title", "#FEFCFC") //white
  .setColor("username-box", "#FEFCFC") //white
  .setColor("discriminator-box", "#FEFCFC") //white
  .setColor("message-box", "#FEFCFC") //white
  .setColor("border", "#000000") //black
  .setColor("avatar", "#FEFCFC") //white
  .setBackground("your bg image") //should be png format
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
  member.guild.channels.cache.get("channel id").send(member.user.toString(), attachment)
})
client.on("guildMemberRemove", (member) => {
    client.channels.cache.get("962419220241604678").send( member.toString + " ha disertato,riportatelo al fronte con noi")
})
client.on("messageCreate", message => {
    if (message.content == "!twitch") {
        message.channel.send("@everyone Fenyx è in live con una nuovissima cacata pazzurdissimerrima: https://www.twitch.tv/zfenyyx")
    }

    if (message.content == "!spotify") {
        message.channel.send("Questa è la playlist di fenyx: https://open.spotify.com/playlist/0E0u0bHwzFolFaes7uG41v?si=b91dd9b07111471f")
    }
});