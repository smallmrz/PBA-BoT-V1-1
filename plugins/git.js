let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/iambabu98/uu/main/Hnet.com-image%20(3).jpg")).buffer(), devil, 'ᴾᴮᴬ ᴮᵒᵀ ᴮʸ ᴾᴮᴬ ᴹᵒᴰˢ 𝙼𝚁_𝚣\n\╔ₕₐₚₚy\n\║ₜₒ\n\║ₕₑₗₚ\n\╚Yₒᵤ \n\n\ https://github.com/I4MBetAZ/PBA-BoT-V1\n\n\ ❍︎ ᵢₜz ₘ₃ ₘᵣ_z' , '❤🔥', '.❤🔥', '😗', ',😗')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
