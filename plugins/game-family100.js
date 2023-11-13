/* import { family100 } from '@bochilteam/scraper';
const winScore = 4999;


async function handler(m) {
    let imgr = 'https://i.ibb.co/tDDH5t4/20230723-152236.jpg'
    this.game = this.game ? this.game : {};
    let id = 'family100_' + m.chat;

    if (id in this.game) {
        this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg);
        throw false;
    }

    const json = await family100();
    let caption = `
*Soal:* ${json.soal}
Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
` : ''}
+${winScore} XP tiap jawaban benar
    `.trim();

    this.game[id] = {
        id,
        msg: await this.sendFile(m.chat, imgr + 'Family100', '', caption, m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    };
}

handler.help = ['family100'];
handler.tags = ['game'];
handler.command = /^family100$/i;
handler.limit = true
handler.diamond = 5
handler.group =true

export default handler;
*/
import { family100 } from '@bochilteam/scraper' 
 const winScore = 4999 
 async function handler(m) { 
 let imgr = flaaa.getRandom() 
  
     this.game = this.game ? this.game : {} 
     let id = 'family100_' + m.chat 
     if (id in this.game) { 
         this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg) 
         throw false 
     } 
     const json = await family100() 
     let caption = ` 
 *Soal:* ${json.soal} 
 Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? ` 
 (beberapa jawaban terdapat spasi) 
 `: ''} 
 +${winScore} XP tiap jawaban benar 
     `.trim() 
     this.game[id] = { 
         id, 
         msg: await this.sendFile(m.chat, imgr + 'Family100', '', caption, m), 
         ...json, 
         terjawab: Array.from(json.jawaban, () => false), 
         winScore, 
     } 
 } 
 handler.help = ['family100'] 
 handler.tags = ['game'] 
 handler.command = /^family100$/i 
 handler.limit = true
 handler.diamond = 5
  
 export default handler