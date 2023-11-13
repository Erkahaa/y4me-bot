import { toPTT } from '../lib/converter.js';
import * as baileys from '@whiskeysockets/baileys';
const { MessageType } = baileys;

const handler = async (m, { conn, usedPrefix, command }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';

  if (!/video|audio/.test(mime)) throw `Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${usedPrefix + command}*`;

  const media = await q.download();
  const dataVideo = { ptvMessage: m.message.extendedTextMessage.quotedMessage.videoMessage };

  conn.relayMessage(m.chat, dataVideo, {});
};

handler.help = ['toptv (reply)'];
handler.tags = ['tools'];
handler.command = /^(toptv)?$/i;
handler.disabled = true

export default handler;

// Credit: WeaboCode Team
