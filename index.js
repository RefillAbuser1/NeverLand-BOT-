const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

bot.user.setPresence({game: {name: 'NeverLand | Maintance', type:0 } });
});

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  }

  if (command === "help") {
	 message.channel.sendMessage("NeverLand | Maintance");
  }
  
});

bot.login(process.env.BOT_TOKEN);
