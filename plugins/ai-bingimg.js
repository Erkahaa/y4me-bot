import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) throw 'how can I assist you today?';
    try {
        conn.reply(m.chat, `_Seng sabar!_`, m);
        let data = await fetch(`https://apiruulzz.my.id/api/generator/bingimage?query=${text}&apikey=inirulzz`);
        let json = await data.json();
        let erka = await json.result;
     // if (!results || results.length === 0) throw 'No results found.';
        
        conn.sendFile(m.chat, erka, 'kntl.png', `*Result from:*\n${text}\n*Generate by y6rsxt*`, m);
    } catch (error) {
        m.reply('Error: ' + error);
    }
};

handler.command = handler.help = ['bingimg'];
handler.tags = ['ai'];
handler.limit = 10;

export default handler;