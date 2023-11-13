let handler = async (m, { conn, text }) => {
    conn.game = conn.game ? conn.game : {}
    let room = Object.values(conn.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
    if (room == undefined) {
        return conn.reply(m.chat, `✳️ Anda tidak berada dalam permainan TicTacToe 🎮 `, m)
    }
    delete conn.game[room.id]
    await conn.reply(m.chat, `✅ Sesi *Tictactoe 🎮* dihapus`, m)
}

handler.help = ['delttt']
handler.tags = ['game']
handler.command = ['delttc', 'delttt', 'delxo']

export default handler
