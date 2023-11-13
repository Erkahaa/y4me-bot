// anonymous_chat_.js
export async function before(m, { match }) {
    if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
    if (!this.anonymous) this.anonymous = {}; // Inisialisasi properti jika belum ada

    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING');
    if (room) {
        if (/^.*(next|leave|start)/.test(m.text)) return;
        let other = [room.a, room.b].find(user => user !== m.sender);
        await m.copyNForward(other, true);
    }
    return !0;
}
