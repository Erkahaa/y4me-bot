import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
    if (!text) throw 'Mama kode nya';

    try {
        const res = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${text}?apikey=haikalgans`);
        const json = await res.json();
        const result = json.result;

        conn.sendMessage(m.chat, {
            react: {
                text: '⏳',
                key: m.key,
            },
        });

        conn.sendMessage(m.chat, { document: { url: result }, fileName: `Hasil dari ${text}.pdf`, mimetype: 'application/pdf' }, { quoted: m });
    } catch (error) {
        console.log(error);
        conn.reply(m.chat, 'Terjadi error', m);
    }
};

handler.help = ["nhentai"];
handler.tags = ["nhentai"];
handler.command = /^(nhentai)$/i;
handler.premium = true;

export default handler;