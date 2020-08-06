const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const { MessageEmbed } = require("discord.js");
const { token, prefix } = require('/users/kieferlin/desktop/DiscordBot/config.json');




client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
  client.user.setPresence({ activity: { name: 'Friendschatgg' }, status: 'online' })
  .then(console.log)
  .catch(console.error);
})


// you dont need a new message event every time you make a command btw
client.on('message', message => {
  if (message.content === '!fl help') {
    //message.channel.bulkDelete(1)
    message.delete()
    message.reply('Here');
            const embed = new Discord.MessageEmbed()
                .setTitle('Help')
                .setThumbnail('https://lh3.googleusercontent.com/a-/AOh14Gi-nco2WxXdXBNaLRFkH6CMl_2s0MrlsxxnmNYoGQ=s192-c-rg-br100')
                .addField('!fl chelp', 'Currency help')
                .addField('!fl level', 'Displays your level')
                .addField('!fl Leaderboard', 'Displays the leaderboard')
                .addField('!fl status', 'Displays the status meaning')
                .setColor(0xFFFF0B)
                .setTimestamp()
	              .setFooter('FriendsChatGG', 'https://lh3.googleusercontent.com/a-/AOh14Gi-nco2WxXdXBNaLRFkH6CMl_2s0MrlsxxnmNYoGQ=s192-c-rg-br100');
            message.channel.send(embed)
  }

  if (message.content === '!fl') {
    //message.channel.bulkDelete(1)
    message.delete()
    message.reply('Here');
            const embed = new Discord.MessageEmbed()
                .setTitle('Help')
                .setThumbnail('https://lh3.googleusercontent.com/a-/AOh14Gi-nco2WxXdXBNaLRFkH6CMl_2s0MrlsxxnmNYoGQ=s192-c-rg-br100')
                .addField('!fl chelp', 'Currency help')
                .addField('!fl level', 'Displays your level')
                .addField('!fl Leaderboard', 'Displays the leaderboard')
                .addField('!fl status', 'Displays the status meaning')
                .setColor(0xFFFF0B)
                .setTimestamp()
	              .setFooter('FriendsChatGG', 'https://lh3.googleusercontent.com/a-/AOh14Gi-nco2WxXdXBNaLRFkH6CMl_2s0MrlsxxnmNYoGQ=s192-c-rg-br100');
            message.channel.send(embed);
  }

  if (message.content === '!fl chelp') {
    //message.channel.bulkDelete(1)
    message.delete()
    message.reply('Here');
            const embed = new Discord.MessageEmbed()
                .setTitle('Currency Help')
                .addField('!fc bal', 'Displays your balance')
                .addField('!fl Shop', 'Displays the shop')
                .addField('!fc daily', 'gives your daily money')
                .addField('!fc work', 'Work to get money')
                .setColor(0xFFFF0B)
            message.channel.send(embed);

  }

  if (message.content === '!fl status') {
      //message.channel.bulkDelete(1) //you can use message.delete() instead
      message.delete()
      message.reply('Here');
              const embed = new Discord.MessageEmbed()
                  .setTitle('Currency Help')
                  .addField('online', 'ready')
                  .addField('idle', 'slow/updating')
                  .addField('do not disturb', 'testing')
                  .addField('offline', 'bot is offline')
                  .setColor(0xFFFF0B)
              message.channel.send(embed);

    }
  });




// Call Packages


var money = require('discord-money');
client.on('message', message => {
    var moment = require('moment');
    // Prefix
    const prefix = '!FC ';

    // Example: Fetching Balance
    if (message.content.toUpperCase() === `${prefix}BAL`) {
        message.channel.bulkDelete(1)
        money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
            message.channel.send(`**Balance:** ${i.money}`);
        })


    }

    // Example: Adding Money To A User
    if (message.content.toUpperCase() === `${prefix}PAY`) {

        money.updateBal(message.author.id, 500 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
            message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
        })

    }

    // Example: Removing Money From A User
    if (message.content.toUpperCase() === `${prefix}PAYFINE`) {

        money.updateBal(message.author.id, -500).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the bal $500 lower.
            message.channel.send(`**You paid your fine of $500!**\n**New Balance:** ${i.money}`);
        })

    }

    // Example: Getting a daily reward

         if (message.content.toUpperCase() === prefix + `DAILY`) {
            message.delete();
            if (money[message.author.username + message.guild.name] != moment().format('L')) {
                money[message.author.username + message.guild.name] = moment().format('L')
                money.updateBal(message.author.id, 500).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                    message.channel.send({embed: {
                        color: 3447003,
                        description: 'Recieved your **$500** \`!fc daily`\. Check your \`!fc bal\`.',
                        author: {
                            name: `${message.author.username}#${message.author.discriminator}`,
                            icon_url: message.author.avatarURL
                        }
                    }});
                })
            } else {
                message.channel.send({embed: {
                    color: 3447003,
                    description: 'You already recieved your \`!daily`\. Check later **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
                    author: {
                        name: `${message.author.username}#${message.author.discriminator}`,
                        icon_url: message.author.avatarURL
                    }
                }});
            }
        }

        if (message.content.toUpperCase() === prefix + `WORK`) {
            message.delete();
            if (money[message.author.username + message.guild.name] != moment().format('L')) {
                money[message.author.username + message.guild.name] = moment().format('L')
                money.updateBal(message.author.id, 100).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                    message.channel.send({embed: {
                        color: 3447003,
                        description: 'Recieved your **$100** \`!fc work`\. Check your \`!fc bal\`.',
                        author: {
                            name: `${message.author.username}#${message.author.discriminator}`,
                            icon_url: message.author.avatarURL
                        }
                    }});
                })
            } else {
                message.channel.send({embed: {
                    color: 3447003,
                    description: 'You already recieved your \`!fc work`\. Check later **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
                    author: {
                        name: `${message.author.username}#${message.author.discriminator}`,
                        icon_url: message.author.avatarURL
                    }
                }});
            }
        }
})



const config = require('/users/kieferlin/desktop/discordbot/config.json');
const fs = require("fs");
let db = JSON.parse(fs.readFileSync("/users/kieferlin/desktop/discordbot/database.json", "utf8"));

client.on("message", message => {
    if (message.author.bot) return; // ignore bots

    // if the user is not on db add the user and change his values to 0
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
      };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        message.reply("Congratulations, you level up")
    }



    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(message.content === "!fl level") {
      message.channel.bulkDelete(1)
      message.reply('Here');
        let userInfo = db[message.author.id];
        let member = message.mentions.members.first();
        const embed = new Discord.MessageEmbed()
        .setColor(0xFFFF0B)
        .setTimestamp()
        .setFooter('Level stystem', 'https://lh3.googleusercontent.com/a-/AOh14Gi-nco2WxXdXBNaLRFkH6CMl_2s0MrlsxxnmNYoGQ=s192-c-rg-br100')
        .addField("Level", userInfo.level)
        .addField("XP", userInfo.xp+"/100");

        if(!member) return message.channel.send(embed)
        let memberInfo = db[member.id]
        let embed2 = new Discord.MessageEmbed()
        .setColor(0xFFFF0B)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/100")
        .setTimestamp()
        .setFooter('Level stystem', 'https://lh3.googleusercontent.com/a-/AOh14Gi-nco2WxXdXBNaLRFkH6CMl_2s0MrlsxxnmNYoGQ=s192-c-rg-br100');
        message.channel.sendEmbed(embed2)
    }
    fs.writeFile("/users/kieferlin/desktop/discordbot/database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
    

      

    if(message.content == "!fl leaderboard") {
        embed = new Discord.MessageEmbed()
        const c = Object.entries(db).sort((a, b)=> b[1].level - a[1].level)
        for (var key in db) {
            embed.addField(client.users.cache.get(key).tag, `Level: ${db[key].level} | XP: ${db[key].xp}`);
        };
    
        message.channel.send(MessageEmbed)
    }
    
}
)













client.login('NzI2MTkyNDk5MDQ3MDA2Mjg4.XvZtdw.0H0oH4piPcMi-_CZFrWiBWApI7E');
