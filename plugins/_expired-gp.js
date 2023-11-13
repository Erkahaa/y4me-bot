export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `🔴 Selamat tinggal Shavals *${this.user.name}* akan meninggalkan grup \n\nSaya mengakhiri sewa Anda`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}