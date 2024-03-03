const log = console.log

import configFile from "../../config/config-var";
const { token, prefix, clientid, guildid } = configFile;

import { Client, GatewayIntentBits, Events } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.ClientReady, (c) => {
  log(`Zalogowano jako ${c.user.tag}`);
});

client.on(Events.MessageCreate, (msg) => {
  if (msg.author.bot) return;

  if (msg.content === `${prefix}ping`) {
    msg.reply(`Pong!\n\nClient ping: ${client.ws.ping}`);
  };
});

client.login(token)
