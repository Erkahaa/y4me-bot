import canvafy from 'canvafy'

let handler = async (m) => {
    let who = m.mentionedJid[0]
    let who2 = m.mentionedJid[1]

    if (!who) throw `Tag yang mau dijodohin`
    let username1 = who.split('@')[0];
    let username2 = who2.split('@')[1];

    let korban = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let pp = await conn.profilePictureUrl(who2, 'image').catch(_ => './src/avatar_contact.png')

    let capt = `Cieeee🤭`
    let ship = await new canvafy.Ship()
        .setAvatars(pp, korban)
        .setBackground("image", "https://telegra.ph/file/8f636a846fccb1ae246c5.jpg")
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.5)
        .build();

    await conn.sendMessage(m.chat, { image: ship, caption: capt, mentions: [m.sender, who] }, { quoted: m });
}

handler.help = ['ship [@user]']
handler.tags = ['fun']
handler.command = /^ship|jodoh$/i

export default handler