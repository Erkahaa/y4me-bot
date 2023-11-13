
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 Grup tidak mendukung konten nsfw\n\nUntuk mengaktifkan tipe\n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`)
   
   m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	
	//-- nsfw tipo anime
	case 'xwaifu':
        let xwai = await fetch(`https://api.waifu.pics/nsfw/waifu`)
        if (!xwai.ok) throw await xwai.text()
        let xwfu = await xwai.json()
        if (!xwfu.url) throw '❎ Error'
        conn.sendFile(m.chat, xwfu.url, 'img.jpg', `✅ Random ${command}`, m)
        m.react(xmoji)    
  break

case 'blowjob':
case 'trap':
  let res = await fetch(`https://api.waifu.pics/nsfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendFile(m.chat, json.url, 'img.jpg', `✅ Nih ${command} ya walaupun fetish lu aneh🚫`, m)
    m.react(xmoji) 
break

case 'cum':
case 'femdom':
case 'bdsm':
case 'netorare':
case 'maid':
case 'orgy':
case 'yuri':
    let as = await conn.getFile(global.API('zein', `/api/morensfw/${command}`, { }, 'apikey'))
    conn.sendFile(m.chat, as.data, 'img.jpg', `✅ Nih jangan kebanyakan ngocok dek🤓`, m)
    m.react(xmoji) 
break
        
case 'xneko':
        let ye = await conn.getFile(global.API('arif',`/api/nsfw/neko`, { }, 'apikey'))
        conn.sendFile(m.chat, ye.data, 'img.jpg', `✅ Nih xneko,ya fetish lu aneh sat🚫`, m)
        m.react(xmoji)
break
//https://api.arifzyn.com/api/nsfw/neko?apikey=O8cTbeyUDG
case 'tentacles':
	     let tentacles = await conn.getFile(global.API('ordiston', `/api/nsfw/tentacles`, { }, 'apikey'))
	     conn.sendFile(m.chat, tentacles.data, 'img.jpg', `✅ ${command}`, m)
	     m.react(xmoji) 
	break
        
        case 'hentaivid':
    let hv = await con.getFile(global.API('ordiston', `/api/nsfw/hentaivid`, { }, 'apikey'))
    conn.sendFile(m.chat, hv.data, 'video.mp4', `✅ Nih bokep nya tuan`, m)
    m.react(xmoji)

case 'hentai':
    let he = pickRandom(['yuri', 'cum', 'xneko', 'blowjob', 'ass', 'pussy', 'femdom', 'bdsm', 'orgy', 'maid', 'tentacles' ,'netorare'])
    let les = await conn.getFile(global.API('zein', `/api/morensfw/${he}`, { }, 'apikey'))
    conn.sendFile(m.chat, les.data, 'img.jpg', `✅ Nih dek ${command},stop pmo ya kids!😼`, m)
    m.react(xmoji) 
break

default:
 }

}
handler.help = ['xwaifu', 'xneko', 'blowjob', 'trap', 'yuri','femdom','bdsm', 'netorare', 'maid', 'orgy', 'tentacles', 'cum', 'hentai']
handler.tags = ['ansfw']
handler.command = /^(xwaifu|xneko|blowjob|trap|yuri|femdom|bdsm|netorare|maid|orgy|tentacles|cum|hentai)$/i
handler.register = true
handler.premium = true

export default handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
