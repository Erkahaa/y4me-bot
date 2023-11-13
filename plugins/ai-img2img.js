import axios from "axios"
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, args }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Media Nya Kak'
let media = await q.download()
let url = await uploadImage(media)
let response = args.join(' ').split('|')
if (!args[0]) throw 'Masukan Promptnya Dan Negative Promptnya Kak\n\nExample: .img2img like a anime|nsfw'
m.reply(wait)
const payloads = {
	prompt: `${response[0]}`,
	init_image: url, 
	width: 600,
	height: 600,
	steps: 30,
	model_id: 'realisian',
	sampler: "Euler a",
	seed: null,
	cfg: 7,
	image_num: 2, 
	negative_prompt: `${response[1]}`,
	safety_checker: "no", 
	enhance_prompt: "no",
	multi_lingual: "no", 
	panorama: "no", 
	lora_model: null, 
	hiresFix: "yes", 
	lora_strength: 1,
	webhook: null, 
};
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/diffusion/img2img",
		method: "POST",
		params: {
			apikey: global.rose,
		},
		data: payloads,
	})
	.catch((e) => e?.["response"]);
const { status, message } = data;
if (!status) {
	return console.error(message); 
}
const { result } = data;
const { images } = result
console.log(result)
conn.sendMessage(m.chat, { image: { url: result.images[0] }, caption: 'Nih Kak, Maaf Kalau Hasilnya Tidak Sesuai Keinginan'}, m)
}
handler.help = ['img2img']
handler.tags = ['ai', 'prem']
handler.command = /^(img2img)$/i
handler.premium = true

export default handler