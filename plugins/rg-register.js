
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Anda sudah terdaftar\n\nIngin mendaftar ulang?\n\n 📌 Gunakan perintah ini untuk menghapus catatan Anda \n*${usedPrefix}unreg* <Nomor Seri>`
  if (!Reg.test(text)) throw `⚠️ Format salah\n\n ✳️ Penggunaan perintah : *${usedPrefix + command} nama.umur*\n📌Contoh : *${usedPrefix + command}* ${name2}.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Nama tidak boleh kosong'
  if (!age) throw '✳️ Usia tidak bisa kosong'
  if (name.length >= 30) throw '✳️ Namanya terlalu panjang' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow Kakek ingin bermain bot'
  if (age < 5) throw '🚼  Ada bayi kakek-nenek kwkwkw '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *TERDAFTAR* 」─
▢ *Nama:* ${name}
▢ *Umur* : ${age} Tahun
▢ *Nomor Seri* :
${sn}
└──────────────

 *${usedPrefix}help* untuk melihat Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

