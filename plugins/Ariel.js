let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
ɖօռȶ ȶǟɢ ʍʏ օառɛʀ...
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@50378165999/i
handler.command = new RegExp

module.exports = handler
