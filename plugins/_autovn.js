import util from "util";
import path from "path";

const audio = [
  "https://bucin-livid.vercel.app/audio/adaapa.mp3",
  "https://bucin-livid.vercel.app/audio/adaapa1.mp3",
  "https://bucin-livid.vercel.app/audio/apaansih.mp3",
  "https://bucin-livid.vercel.app/audio/iya%20kak.mp3",
  "https://bucin-livid.vercel.app/audio/kenapa.mp3",
  "https://bucin-livid.vercel.app/audio/oy.mp3",
];

const handler = async (m, { conn }) => {
  conn.sendFile(m.chat, `${audio[Math.floor(Math.random() * audio.length)]}`, "oy.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
};

handler.customPrefix = /^(woi|erka)$/i;
handler.command = new RegExp();

export default handler;