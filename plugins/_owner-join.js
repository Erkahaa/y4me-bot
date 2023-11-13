export async function before(m, { conn, participants }) {
	conn.danil_join = conn.danil_join
		? conn.danil_join
		: {
				join: false,
				time: 0,
		  };
	const currentTime = Math.floor(Date.now() / 1000);
	if (!m.isGroup || conn.danil_join["time"] > currentTime) {
		return;
	}
	if (m.sender === "6289688403000@s.whatsapp.net") {
		await conn.sendMessage(
			m.chat,
			{
				text:
					"Perhatian, Owner *y6rsxt* telah tiba!",
			},
			{
				quoted: m,
				mentions: participants.map((u) => u.id).filter((v) => v !== conn.user.jid),
			}
		);
		conn.danil_join = {
			join: true,
			time: Math.floor(Date.now() / 1000) + 2 * 1000,
		};
	}
}