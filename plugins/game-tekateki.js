import fetch from 'node-fetch';
import fs from 'fs'; // Import the 'fs' module to work with the local file system

let timeout = 120000;
let poin = 4999;
let handler = async (m, { conn, command, usedPrefix }) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  let id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0]);
    throw false;
  }

  // Modify this part to get the image directly from the local directory
  let imgr = './src/inifoto.png';

  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json();
  let json = src[Math.floor(Math.random() * src.length)];
  let caption = `*${command.toUpperCase()}* 
 ${json.soal} 
  
 Timeout *${(timeout / 1000).toFixed(2)} detik* 
 Ketik ${usedPrefix}htek untuk bantuan 
 Bonus: ${poin} XP 
     `.trim();
  conn.tekateki[id] = [
    await conn.sendFile(m.chat, imgr, '', caption, m),
    json,
    poin,
    setTimeout(() => {
      if (conn.tekateki[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout),
  ];
};

handler.help = ['tekateki'];
handler.tags = ['game'];
handler.command = /^tekateki/i;

export default handler;

const buttons = [
  ['Hint', '/htek'],
  ['Nyerah', 'menyerahtek'],
];
