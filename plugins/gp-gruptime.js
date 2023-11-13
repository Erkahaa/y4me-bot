let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')];
    
    if (isClose === undefined) {
        throw `
*✳️ Pilih salah satu opsi:*
  *▢ ${usedPrefix + command} close*
  *▢ ${usedPrefix + command} open*
`.trim();
    }

    // Check if a duration is specified (e.g., group close 60)
    let duration = parseInt(args[1]);
    if (!isNaN(duration)) {
        if (isClose === 'announcement') {
            // Close the group for the specified duration
            await conn.groupSettingUpdate(m.chat, isClose);
            setTimeout(async () => {
                // Reopen the group after the specified duration
                await conn.groupSettingUpdate(m.chat, 'not_announcement');
            }, duration * 1000); // Convert seconds to milliseconds
        } else {
            throw `You can only specify a duration when closing the group.`;
        }
    } else {
        await conn.groupSettingUpdate(m.chat, isClose);
    }
}

handler.help = ['gctime *open/close*']
handler.tags = ['group']
handler.command = ['grouptime', 'gctime'] 
handler.admin = true
handler.botAdmin = true

export default handler