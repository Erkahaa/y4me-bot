import fetch from 'node-fetch';

let handler = async (m, { conn, text, prefix, command, Func }) => {
  try {
    if (!global.db.data.chats[m.chat].nsfw) throw `🚫 Grup tidak mendukung konten nsfw\n\nUntuk mengaktifkan tipe\n*${usedPrefix}enable* nsfw`;
    
    let user = global.db.data.users[m.sender].age;
    if (user < 17) throw m.reply(`❎ Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`);

    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    let res = await fetch(`https://fantox-apis.vercel.app/${command}`);
    if (res.status !== 200) return conn.reply(m.chat, 'Error! Please try another one.', m);

    let data = await res.json();
    if (!data.url) return conn.reply(m.chat, 'Error! Please try another one.', m);

    conn.sendFile(m.chat, data.url, 'img.jpg', `Nih ${command}!`, m);
  } catch (error) {
    m.reply("Terjadi kesalahan dalam mengambil data.");
    console.error(error);
  }
};

handler.help = ['genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts', 'stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl'];
handler.tags = ['nsfw', 'prem'];
handler.command = /^(genshin|swimsuit|schoolswimsuit|white|barefoot|touhou|gamecg|hololive|uncensored|sunglasses|glasses|weapon|shirtlift|chain|fingering|flatchest|torncloth|bondage|demon|wet|pantypull|headdress|headphone|tie|anusview|shorts|stokings|topless|beach|bunnygirl|bunnyear|idol|vampire|gun|maid|bra|nobra|bikini|whitehair|blonde|pinkhair|bed|ponytail|nude|dress|underwear|foxgirl|uniform|skirt|sex|sex2|sex3|breast|twintail|spreadpussy|tears|seethrough|breasthold|drunk|fateseries|spreadlegs|openshirt|headband|food|close|tree|nipples|erectnipples|horns|greenhair|wolfgirl|catgirl)$/i;
handler.premium = true;
handler.register = true

export default handler;