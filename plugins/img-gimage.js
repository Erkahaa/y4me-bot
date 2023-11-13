import fg from 'api-dylux'

// Daftar kata-kata NSFW yang harus dicegah
const badWordList = ['porn', 'sex', 'seks', 'hot',  'pussy', 'penis', 'memek', 'kelamin', 'boobs', 'payudara', 'kontol', 'dick', 'bugil', 'nude', 'xx', 'xn', 'cum', 'hentai', 'dildo', 'bokep'/* ...Tambahkan kata-kata NSFW lainnya di sini... */]

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Masukkan gambar yang ingin Anda cari \n\n📌 Contoh: *${usedPrefix + command}* Billie Eilish`

  // Fungsi untuk memeriksa apakah teks mengandung kata-kata NSFW
  const containsBadWord = badWordList.some(word => text.toLowerCase().includes(word.toLowerCase()))

  if (containsBadWord) {
    // Tanggapi jika teks mengandung kata-kata NSFW
    throw '❌ Gaboleh,dosa!.'
  }

  // Jika teks aman, lanjutkan dengan pencarian gambar
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ Hasil dari : *${text}*`.trim(), m)
}

handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler