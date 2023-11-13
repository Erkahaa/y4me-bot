import moment from 'moment-timezone'; 
  
 export async function before(m) { 
     if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return 
  
     let user = global.db.data.users[m.sender] 
     let txt = `👋Hai, ${ucapan()} 
 ${user.banned ? '📮Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `💬Ada yg bisa ${this.user.name} bantu?`}`.trim() 
  
     if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam) 
     await m.reply(`👋Hai ${conn.getName(m.sender)}, ${ucapan()} dengan *Y6rsxtBase* disini!, apa ada yang bisa saya bantu?🤔
Ketik _.menu_ untuk menampilkan daftar perintah.

*Note : Jika ingin invite bot silahkan hubungi owner yah melalui command .owner*`) 
     user.pc = new Date * 1 
 } 
  
  
 function ucapan() { 
     const time = moment.tz('Asia/Jakarta').format('HH') 
     let res = "Selamat dinihari 🌆" 
     if (time >= 4) { 
         res = "Selamat pagi 🌄" 
     } 
     if (time > 10) { 
         res = "Selamat siang ☀️" 
     } 
     if (time >= 15) { 
         res = "Selamat sore 🌇" 
     } 
     if (time >= 18) { 
         res = "Selamat malam 🌙" 
     } 
     return res 
 }