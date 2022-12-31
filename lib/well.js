const fs = require('fs')


exports.groupResponse_Remove = async (naimi, update) => {
    try {
    ppuser = await naimi.profilePictureUrl(num, './karuta/karuta.png')
    } catch {
    ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
    }
    const metadata = await naimi.groupMetadata(update.id)
    for (let participant of update.participants) {
    try{
    let metadata = await naimi.groupMetadata(update.id)
    let participants = update.participants
    for (let num of participants) {
    if (update.action == 'remove'){
    var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye👋'}, type: 1 }]
    await naimi.sendMessage(
    update.id, 
    {
    text: `*Sayonara @${num.split("@")[0]}*\n*kalo mau balik lagi ke group ini, wajib bawa gorengan 1 truk😊*`,
    buttons: button,
    footer: metadata.subject, 
    mentions: [num] })
    }
    }
    } catch (err) {
    console.log(err)
    }
    }   
    }
      
    exports.groupResponse_Welcome = async (naimi, update) => {
    try {
    ppuser = await naimi.profilePictureUrl(num, '../karuta/karuta.png')
    } catch {
    ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
    }
    const metadata = await naimi.groupMetadata(update.id)   
    for (let participant of update.participants) {
    try{
    let metadata = await naimi.groupMetadata(update.id)
    let participants = update.participants
    for (let num of participants) {
    if (update.action == 'add') {
    var button = [{ buttonId: 'mn', buttonText: { displayText: 'MENU'}, type: 1 }]
    await naimi.sendMessage( 
    update.id, 
    { 
text: `SELAMAT DATANG @${num.split("@")[0]} DI GRUP ${metadata.subject}

Jangan lupa baca rules group dan klick tombol di bawah\nuntuk melanjutkan

RULES GROUP

- *Di Larang* Culik Member. Bersaing Lah Dengan Cara Sehat
- *Di Larang* Jual Beli / Promosi
- *Di Larang* Kirim Virtex/Slayer Atau Sejenisnya
- *Di Larang* Kirim Link Apapun

TERIMAKASIH TELAH MEMATUHI PERATURAN GRUP INI`,
image: fs.readFileSync('./karuta/karuta.png'),
jpegThumbnail: fs.readFileSync('./karuta/karuta.png'),
buttons: button,
footer: metadata.subject,
thumbnail: fs.readFileSync('./karuta/karuta.png'),
    mentions: [num] })
    }
    }
    } catch (err) {
    console.log(err)
    }
    }   
    }
      