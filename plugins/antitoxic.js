let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 卂几ㄒ丨 ㄒㄖ乂丨匚 」*
Sender : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
Message : ${m.text}
Get used to it, don't be toxic! :)
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /bitch|fuck|nude|fucker|koothi|kunna|andi|kundi|poor/i
handler.command = new RegExp

module.exports = handler
