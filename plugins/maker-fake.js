const {
    profilePictureUrl,
    getName
} = (await import('@whiskeysockets/baileys')).default
const handler = async (m, { conn, text }) => {
    if (!text) throw 'Kontol';

    const avatar = await profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    const displayName = getName(m.sender);
    const username = m.sender.split('@')[0];
    const replies = '639';
    const retweets = '186';
    const theme = 'dark';
    const url = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayName)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;

    conn.sendFile(m.chat, url, 'fake.png', '*Done*', m);
};

handler.help = ['faketwit <comment>'];
handler.tags = ['maker'];
handler.command = /^(faketwit)$/i;

export default handler;