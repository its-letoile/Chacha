const MainClient = require("./nanospace");
const client = new MainClient();
require("http").createServer((req, res) => res.end("bot is live")).listen(process.env.PORT || 8080)
client.connect()

module.exports = client;