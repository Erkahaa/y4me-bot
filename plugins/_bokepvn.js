import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${pickRandom(audio)}`, "dosa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}

handler.command = ['bokep']

export default handler;

const audio = [
	"https://bucin-livid.vercel.app/audio/dosa.mp3",
	"https://bucin-livid.vercel.app/audio/audio_gaboleh-gitu.mp3"
];

function pickRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}