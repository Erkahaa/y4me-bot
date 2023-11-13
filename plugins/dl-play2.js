import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ Masukkan judul lagu\n\n📌Contoh *${usedPrefix + command}* Cupid`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Video/Audio Tidak Ditemukan`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
  let play = `
	≡ *PLAY MUSIC*
┌──────────────
▢ 📌 *Titel* : ${vid.title}
▢ 📆 *Diterbitkan:* ${vid.ago}
▢ ⌚ *Durasi:* ${vid.timestamp}
▢ 👀 *Dilihat:* ${vid.views}
└──────────────

_Mengirim..._`
//conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rpl)

conn.sendMessage(m.chat, {
text: play,
contextInfo: {
externalAdReply: {
title: nans,
body: '',
thumbnailUrl: vid.thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})

if (size.split('MB')[0] >= limit) return m.reply(` ≡  *PLAY YTDL*\n\n▢ *⚖️Size* : ${size}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`) 
if (size.includes('GB')) return m.reply(` ≡  *PLAY YTDL*\n\n▢ *⚖️Size* : ${size}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *PLAY YTDL*
  
▢ *📌Titel* : ${title}
▢ *🎞️Kualitas* : ${q}
▢ *⚖️Size* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
    } catch {
		m.reply(`Kesalahan: Coba lagi`)
    }

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler