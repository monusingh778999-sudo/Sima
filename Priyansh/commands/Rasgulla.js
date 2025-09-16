const fs = require("fs");
module.exports.config = {
	name: "rasgulaa",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "barfi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Jamal")==0 || event.body.indexOf("jamal")==0 || event.body.indexOf("♟️")==0 || event.body.indexOf("Rasgulle")==0) {
		var msg = {
				body: "𝗝𝗔𝗠𝗔𝗟 𝗢𝗪𝗡𝗘𝗥 𝗣𝗔𝗧𝗛𝗔𝗡 𝗞𝗘 𝗗𝗢𝗦𝗧 𝗛𝗔𝗜𝗡\n\n➜𝗙𝗥𝗜𝗘𝗡𝗗✪\n     *┏━━ೋ•  •ೋ━━┓*\n                𝗝𝗔𝗠𝗔𝗟\n    *┗━━ೋ•  •ೋ━━┛*\n\n✦𝐅𝐁 𝐋𝐢𝐧𝐤✦\n\nhttps://www.facebook.com/share/16jaeWXJBu/",
				attachment: 
fs.createReadStream(__dirname + `/noprefix/Shayan.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
