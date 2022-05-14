const discord = require("discord.js");

const config = require("./config.json");
const utils = require("./utils/util.js");

const client = new discord.Client();
const util = new utils.Utils(client, process.cwd())
module.exports = { client, config };

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

util.loadModules("events");
util.loadModules("commands", true)

client.login("OTM1NjYwMzM2ODM5Nzg2NjA3.Goh-am.js_BF8wteu0rEXAID0ASoi5dRJQRY__FsqmDtk");
