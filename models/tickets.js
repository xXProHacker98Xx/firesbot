const mongoose = require("mongoose")

let ticketSchema = mongoose.Schema({
  guildID: {type: String},
  ticketReactChannel: {type: String},
  messageID: {type: Array, default: []},
  supportRoleID: {type: String},
  categoryID: {type: String},
  ticketModlogID: {type: String},
  ticketType: {type: String, default: ''},
  ticketCase: {
    type: mongoose.SchemaTypes.Number,
    default: '1'
  },
  maxTicket: { 
    type: Number,
    default: '1'
  },
  ticketToggle: {type: String, default: false},
  ticketWelcomeMessage: {type: String, default: `Hey {user} Benvenuto nel tuo ticket!\n\nGrazie per averne create uno, il personale sarà presto disponibile\n\nNel mentre spiega il tuo problema`},
  ticketPing: {type: String, default: false},
  ticketClose: {type: String, default: false},
  ticketTimestamp: {type: String, default: false},
  ticketLogColor: {type: String, default: `#000000`},
  ticketEmbedColor: {type: String, default: `#000000`},
  ticketTitle: {type: String, default: `Server Tickets`},
  ticketDescription: {type: String, default: `Reagisci con 🎫 per aprire un ticket!`},
  ticketFooter: {type: String, default: `Powered by Gioffry develop`},
  ticketReaction: {type: String, default: `🎫`},
  ticketWelcomeColor: {type: String, default: `#000000`},
  requireReason: {type: String, default: true},
  ticketCustom: {type: String, default: "false"}

})

module.exports = mongoose.model('ticketSchema', ticketSchema)