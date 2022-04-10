const Discord = require("discord.js");
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]});
const prefix = require('discord-prefix');
const tickets = require("./tickets.json")

client.login(process.env.token)

client.on("ready", () => {
    console.log("Il bot è online");
    client.user.setActivity("Sta guardando zFenyyx", {
        type: "STREAMING",
        url: "https://www.twitch.tv/zfenyyx"
    });
});

let defaultPrefix = '!';

client.on("messageCreate", message => {
    if (message.content == "!twitch") {
        message.channel.send("@everyone Fenyx è in live con una nuovissima cacata pazzurdissimerrima: https://www.twitch.tv/zfenyyx")
    }

    if (message.content == "!spotify") {
        message.channel.send("Questa è la playlist di fenyx: https://open.spotify.com/playlist/0E0u0bHwzFolFaes7uG41v?si=b91dd9b07111471f")
    }
});

if(message.content.startsWith(!ticket setup)){
    let channel = message.mentions.channels.first()
    let kate;
    let modrole = message.mentions.roles;

    message.guild.channel.cache.forEach(chn=>{
        if(chn.type == "GUILD_CATEGORY" && !kate && chn.name.toLowerCase() == "tickets"){
            kate = chn:
        }
    })

    if(!channel) return message.channel.send({content: "E' nesessario specificare dove inviare il messaggio"});

    if(!jate){
        await message.guild.channels.create("Tickets". {
            type:"GUILD_CATEGORY",
            PermissionOverwrites: [
                {id:message.guild.id, deny:["VIEW_CHANNEL"]}
                {id:btoa.user.id,allow:[VIEW_CHANNEL]}
            ]
        }).then(l=>kate=l);
    }

    if(!tickets[message.guild.id]){
        tickets[message.guild.id] = {
            id:0,
            access:[]
        }
    }

    let l = [{
        id:message.guild.id,
        deny:[VIEW_CHANNEL]
    },
    {
        id:btoa.user.id,
        allow:[VIEW_CHANNEL]
    }]

    modrole.forEach(role=>{
        l.push({id:role.id, allow:["VIEW_CHANNEL"]})
    })

    tickets[message.guild.id].id = kate.id

    tickets[message.guild.id].access = l

    FileSystem.writeFileSync("./tickets.json", JSON.stringify(tickets));

    let button = new Discord.MessageButton()
    .setLabel("Crea un ticket")
    .setCustomId("create_ticket_button")
    .setStyle("SECONDARY")
    .setEmoji("🎫")

    let row = new Discord.MessageActionRow()
    .addComponents(button);

    let embed = new Discord.MessageEmbed()
    .setTitle("Tickets")
    .setDescription("Premi 'Crea un Ticket' per crearne uno")
    .setColor("YELLOW")
    .setTimestamp()

    channel.send({embeds:[embed], components:[row]});
}