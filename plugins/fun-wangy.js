import fetch from 'node-fetch' 
 let handler = async(m, { conn, usedPrefix, text, args, command }) => { 
     if (!text) throw `Masukkan query!` 
               let awikwok = `${text}........... ${text} ${text} ${text} AAAAAAAAA🥹😖🥹 WANGI🥰 WANGI🥰🥰 WANGI💦 WANGI HU😋 HA🥹 HU🥰 HA🥹 HU🥰 HA🥹, aaaah baunya ${text}💦💦 wangi aku mau nyiumin aroma wanginya🥹🥹😖 ${text} AAAAAAAAH🥵🥵 ~~ Rambutnya....🫣🤗 aaah rambutnya juga pengen aku elus-elus🤗🤗 ~~~~~ AAAAAH ${text} MANIS BANGET YAAMPUN.🥹🥹 dia JUGA PAKE STOCKING IMUT BANGET AAAAAAAAH🥰🥰🥰 ${text} LUCCUUUUUUUUUUUUUUU😖😖............ GUA BAKAL BAKAR DUIT 12 JUTA RUPIAH BUAT ${text}😡😡 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH 
apa ? ${text} itu gak nyata 😡😤😠? Cuma karakter 2 dimensi katamu😤😒🙄 ? nggak😠, ngak😮‍💨 ngak 😤ngak ngak 🤬NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA🤬🤬 NGAAAAAAAAAAAAAAAAAK MIHOYO BANGSAAAAAT🤬😡😤 !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI🤬. 
${text} ngeliat gw ... ${text} di laptop ngeliatin gw ${text} ... kamu percaya sama aku 🥹🥹? aaaaaaaaaaah syukur 😅🥹${text} gak malu merelakan aku aaaaaah🤗 YEAAAAAAAAAAAH GUA MASIH PUNYA ${text}😁, SENDIRI PUN NGGAK MASALAH😁🥹🤗 AAAAAAAAAAAAAAH KIRIMKANLAH CINTAKU PADA ${text}😁🤩🥰 KIRIMKAN KE MIHOYO AAAAAAAAH😼😼` 
               m.reply(awikwok, null, m.mentionedJid ? { 
         mentions: conn.parseMention(m.text) 
     } : {}) 
 } 
 handler.command = handler.help = ['wangy'] 
 handler.tags = ['fun'] 
 handler.limit = true 
 export default handler