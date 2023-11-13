const handler = async (m, { conn, usedPrefix, command, text, args }) => {
	delete conn.deep_fake_AI[m.sender];
	m.reply(`Done`);
};

handler["help"] = ["resetdf"];
handler["command"] = ["resetdf"];
handler["tags"] = ["ai"];

export default handler;