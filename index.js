const Discord = require('discord.js');
const config = require('./config.js');
const { loadBot } = require('./util/loader');
require("dotenv").config({
  path: ".env",
});

const client = new Discord.Client();

["commands", "cooldowns"].forEach(x => client[x] = new Discord.Collection());

loadBot(client);

client.on('ready', () => {
  const statuses = [
      `Template AirDev`
  ]
  let i = 0
  setInterval(() => {
      client.user.setActivity(statuses[i], { type: 'STREAMING', url: 'https://www.twitch.tv/nzorp_' })
      i = ++i % statuses.length
  }, 1e4)
});

client.login(process.env.TOKEN);
