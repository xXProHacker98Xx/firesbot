module.exports = {
    name: "ticket",
    aliases: [],
    permissions: [],
    description: "Apri un ticket!",
    async execute(message, args, cmd, client, discord) {
      const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
      
      channel.setParent("961663978034040853");
  
      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.author, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });
  
      const reactionMessage = await channel.send("Grazie per averci contattato!");
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Errore durante l'invio di emoji!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("AMMINISTRATORE"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send("Il canale verrà eliminati tra 5 secondi!");
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
  
      message.channel
        .send(`Siamo sempre a disposizione! ${channel}`)
        .then((msg) => {
          setTimeout(() => msg.delete(), 7000);
          setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    },
  };
  