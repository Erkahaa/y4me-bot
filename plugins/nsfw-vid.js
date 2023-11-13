import fetch from 'node-fetch'
import { pickRandom } from '../lib/others.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
        await m.reply("_In progress, please wait..._");
		let res = await fetch(`https://raw.githubusercontent.com/AditPetani/khusus/main/nsfwvid2.json`)
		let anu = pickRandom(await res.json())
		if (!anu) throw Error('error : no url')
		if (anu.split('.').pop() == 'gif') {
			let buffer = await sticker(false, anu, packname, author)
			await conn.sendFile(m.chat, buffer, 'sticker.webp', '', m)
		} else await conn.sendFile(m.chat, anu, '', `hayoloh`, m, false, { viewOnce: true }) 
	} catch (e) { 
		console.log(e)
		m.reply('scrape failed') 
	}
}

handler.help = ['nsfwvid']
handler.tags = ['nsfw']
handler.command = /^(nsfwvid)$/i

handler.premium = true

export default handler