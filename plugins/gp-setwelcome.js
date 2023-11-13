//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Pesan pembuka telah dikonfigurasi')
  } else throw `✳️ Masukkan pesan Selamat Datang\n\n@user (menyebutkan)\n@group (Nama Grup)\n@desc (Deskripsi Grup)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
