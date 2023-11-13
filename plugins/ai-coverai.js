import axios from "axios";

const handler = async (m, { conn, args }) => {
	conn.videoVoice_ai = conn.videoVoice_ai ? conn.videoVoice_ai : {};
	if (m.sender in conn.videoVoice_ai) {
		return m.reply("You have undone job, please wait...");
	}
	const [voice_id, youtube_url] = args;
	if (!voice_id || !youtube_url) {
		return m.reply("Please input voice id and youtube url");
	}
	conn.videoVoice_ai[m.sender] = true;
	m.reply("Please wait a long time, maybe 1 minute");
	const { data } = await axios
		.request({
			baseURL: 'https://api.itsrose.life',
			url: "/sovits/inference_voice",
			method: "POST",
			headers: {
				Authorization: '132fb9c3b775e293be07d8db',
			},
			data: {
				voice_id,
				youtube_url,
				watermark: false,
			},
		})
		.catch((e) => e?.response);
	const { status, message, result } = data;
	if (!status) {
		delete conn.videoVoice_ai[m.sender];
		return m.reply(message);
	}
	const { video, metadata } = result;
	if (!video) {
		delete conn.videoVoice_ai[m.sender];
		return m.reply("Try again.");
	}
	await conn.sendMessage(
		m.chat,
		{
			video: {
				url: video,
			},
			caption: `${JSON.stringify(metadata, null, 2)}`,
		},
		{ quoted: m }
	);
	delete conn.videoVoice_ai[m.sender];
};

handler.help = ["coverai <voice_id> <youtube_url>"];
handler.tags = ["ai"];
handler.command = ["coverai"];
export default handler;