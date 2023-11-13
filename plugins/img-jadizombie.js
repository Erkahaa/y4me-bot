import fetch from 'node-fetch'; 
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime)) {
		let anu = await (await fetch(`https://api.itsrose.life/image/turnMe?apikey=${global.rose}`, {
			method: 'POST',
			headers: {
				'accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				init_image: await uploadImage(await q.download()),
				style: 'zombie',
				skin: 'default',
				image_num: 1,
				prompt: ''
			})
		})).json()
		if (!anu.status) throw anu.message
		await conn.sendFile(m.chat, anu.result.images[0], '', 'jadizombie', m)
	} else throw `Kirim Gambar Dengan Caption *${usedPrefix + command}*`
}

handler.help = ['jadizombie']
handler.tags = ['ai', 'maker', 'img', 'prem']
handler.command = /^((to|jadi)zombie)$/i
handler.premium=true

export default handler