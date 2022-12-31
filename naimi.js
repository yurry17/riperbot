process.on('uncaughtException', console.error)
require('./src/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const crypto = require('crypto')
const ms = require('parse-ms')
const toMs = require('ms')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const x = require('xfarr-api')
const mathjs = require('mathjs')
const maker = require('mumaker')
const ggs = require('google-it')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const { performance } = require('perf_hooks')
const caliph = require('caliph-api')
const hx = require("hxz-api")
const bocil = require("@bochilteam/scraper")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const imgbbUploader = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const  { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, generateProfilePicture, reSize}= require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require('./lib/scraper.js')
const { hentai } = require('./lib/scraper2.js')
const { cmdadd } = require('./lib/hit')
const { cmdaddtd } = require('./lib/hittd')
const { mediafireDl } = require('./lib/mediafire.js')
const cerpen = require('./lib/cerpen.js')
const { color, bgcolor } = require("./lib/color")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { naimiWiki } = require('./lib/naimiwiki.js')
const {
  adduang,
  adduangUser,
  checkuangUser,
  confirmuang
} = require('./lib/atm.js')
const tanggl = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const timetime = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
// read database
let limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let register = JSON.parse(fs.readFileSync('./database/user/register.json'));
let setting = JSON.parse(fs.readFileSync('./src/setting.json'))
logonya = fs.readFileSync("./karuta/thumb.jpg")
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
const ceemde = JSON.parse(fs.readFileSync('./database/totalcmd.json'))
const ceemdetd = JSON.parse(fs.readFileSync('./database/todaycmd.json'))
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync("./database/group/antilink.json"));
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
const limitawal = setting.limitawal
const uangawal = setting.uangawal
karutamd = fs.readFileSync('./karuta/karuta.png')
// UCAPAN WAKTU By MyMans APIs)
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌃'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌆'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏞️'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌅'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
// TANGGAL By MyMans APIs 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
module.exports = naimi = async (naimi, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? setting.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await naimi.decodeJid(naimi.user.id)
const isOwner = setting.ownerNumber == m.sender ? true : ["6281248712851@s.whatsapp.net"].includes(m.sender) ? true : false
const itsMe = m.sender == botNumber ? true : false
const text = args.join(' ')
const q = args.join(' ')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	const isPremium = premium.includes(m.sender)
	const isBan = banned.includes(m.sender)
	const isRegister = register.includes(m.sender)
// Group
const groupMetadata = m.isGroup ? await naimi.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isWelkom = m.isGroup ? welkom.includes(from) : false
const isAntilink = m.isGroup ? antilink.includes(from) : false
const isMute = m.isGroup ? mute.includes(from) : false
if (isMute){
if (!groupAdmins && !isOwner)
return
}
// Public & Self
if (!naimi.public) {
if (isOwner && !m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)
// Push Message To Console && Auto Read
if (m.message && !m.key.fromMe) {
naimi.readMessages([m.key])
naimi.sendPresenceUpdate('available', from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
adduangUser(sender, hsjdh)
}
const reactionMessage = {
    react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: false, id: quoted.id }
    }
}
	//BUTON MESAGE
	const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
naimi.sendMessage(id, butonna, options)
}
const http = randomNomor(500)
	///reply
const reply = (teks) => {
return naimi.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: m })
}
	const ftex = {
	 key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "120363037883546943@g.us" } : {}) 
},
	 message: { 
"extendedTextMessage": {
 "text": `Hallo ${pushname}`,
 "title": `Hallo ${pushname}`,
 'jpegThumbnail': fs.readFileSync("./karuta/webpmobile.jpg")
}
	  } 
}
	const kmd = (teks) => {
naimi.sendMessage(from, { text : teks, contextInfo:{externalAdReply:{
title:"RIVER | FAMILY TOP UP",
body: "Free WhatsApp Bot", 
thumbnail: fs.readFileSync("./karuta/webpmobile.jpg"),
mediaType:1,
mediaUrl: '',
sourceUrl: ""}}}, { quoted: m })
}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
}
//SETINGAN1
let karutaset = global.db.settings[botNumber]
if (typeof karutaset !== 'object') global.db.settings[botNumber] = {}
if (karutaset) {
if (!isNumber(karutaset.status)) karutaset.status = 0
if (!('autobio' in karutaset)) karutaset.autobio = false
if (!('templateImage' in karutaset)) karutaset.templateImage = false
if (!('templateVideo' in karutaset)) karutaset.templateVideo = false
if (!('templateGif' in karutaset)) karutaset.templateGif = false
if (!('templateMsg' in karutaset)) karutaset.templateMsg = false
if (!('templateDocument' in karutaset)) karutaset.templateDocument = true
} else global.db.settings[botNumber] = {
status: 0,
autobio: false,
templateImage: false,
templateVideo: false,
templateGif: false,
templateMsg: false,
templateDocument: true,
}
} catch (err) {
console.error(err)
}
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan di reply/tag*
➸ ${reason ? 'Alasan :' + reason : 'Alasan : Nothing'}
➸ *Selama* : ${clockString(new Date - afkTime)}`
.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`@${sender.split("@")[0]} Telah kembali
Selama : ${clockString(new Date - user.afkTime)}
Setelah : ${user.afkReason}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
if (isCmd) cmdaddtd()
const totalhittd = JSON.parse(fs.readFileSync('./database/todaycmd.json'))[0].todaycmd
// AntiLink
if (isAntilink) {
if (!isBotAdmins) return
}
if (budy.includes(`https://chat.whatsapp.com/`)) {
bvl = `*GROUP LINK DETECTOR*\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
kice = m.sender
naimi.sendMessage(from, {text:`*GROUP LINK DETECTOR*\n\n@${kice.split("@")[0]} Akan dikick karena mengirim link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
setTimeout( () => {
  naimi.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}, 3000)
} else {
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
	// write database every 5 minute
	setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 5 * 1000)
  // reset every 12 hours
let cron = require('node-cron')
cron.schedule('00 00 * * *', () => {
var resetyah = [{"todaycmd":0}]
claimnya = resetyah
console.log('time to reset')
fs.writeFileSync('./database/todaycmd.json', JSON.stringify(claimnya))
exec(`pm2 restart index`)
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
const point = Math.floor(Math.random() * 1) + 0
  /////////FUNTION LIMIT
const addlimit = (sender) => {
	const obj = {id: sender, limit : 0}
limit.push(obj)
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
const addlimitUser = (sender, amount) => {
	let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) {
    position = i
}
})
if (position !== false) {
limit[position].limit += amount
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
}

const checklimitUser = (sender) => {
	let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) {
    position = i
}
})
if (position !== false) {
return limit[position].limit
}
}
 
 const confirmlimit = (sender, amount) => {
   if (isPremium) {return false;}
 let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id == sender) {
    position = i
}
})
if (position !== false) {
limit[position].limit -= amount
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
}
//Checklimit
if (isRegister ) {
const checklimit = checklimitUser(sender)
try {
if (checklimit === undefined) addlimit(sender)
addlimitUser(sender, point)
} catch (err) {
console.error(err)
}
}

menulist = `*${ucapanWaktu}*

SELAMAT DATANG *@${pushname}* DI GRUP RIVER | FAMILY TOP UP

Ketik *ls* atau klick tombol dibawah untuk melihat Daftar Top Up
  
_*RULES GRUP*_
- *Di Larang* Culik Member. Bersaing Lah Dengan Cara Sehat
- *Di Larang* Jual Beli / Promosi
- *Di Larang* Kirim Virtex/Slayer Atau Sejenisnya
- *Di Larang* Kirim Link Apapun

_*TERIMAKASIH TELAH MEMATUHI PERATURAN GRUP INI*_
`

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
/////TEKS BUTTON

const join1 = `Hai kak *@${pushname}* ${ucapanWaktu}\n\nJika Ingin Join Silahkan mengisi data yang di perlukan\n`
const join2 = `Ketikkan *reseller* Atau Klik Tombol di Bawah`
const join3 = [{buttonId: `reseller`,buttonText: {displayText: `CARA JOIN`,},type: 1,},]
const daftar1 = `Hai kak @${pushname} ${ucapanWaktu} \n\nJika Ingin Order, Silahkan Lengkapi Data Berikut\n\nID : \nNICK : \nREGION : \nSISA UC/DM : \nORDER : `
const daftar2 = `Jangan lupa baca panduan ordernya klik dsni`
const daftar3 = [{buttonId: `crd`,buttonText: {displayText: `CARA ORDER `,},type: 1,},]

notgroup = `*Menu ini Hanya dapat di gunakan di dalam group..*\n*Chat personal hanya untuk testimony dan order*`
ordernow = `Anda telah menerima pesan baru dari admin, Silahkan cek pesan masuk anda`

switch(command) {
//group
  case 'ban':
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 62858****`)
if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmin = args.join(" ")
banned.push(`${prmin}@s.whatsapp.net`)
fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
reply(`*Nomor wa.me/${prmin} telah dibanned !*`)
break
  case 'unban':
  if (!isOwner) return reply(mess.owner)
  if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
  if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
banned.splice(anul, 1)
fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
reply(`*Nomor wa.me/${prmin} telah di unban !*`)
  break
  case 'antilink': 
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins && !isOwner) return reply(mess.admin)
    if (isBan) return reply(mess.banned)
  if (args[0] === 'enable'){
   if (isAntilink) return reply(`*Udah nyala!*`)
antilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK DI AKTIFKAN」*\n\nYang Mengenai Link Group Bakal Ke Kick!')
	} else if (args[0] === 'disable') { if (!isAntilink) return reply(`*Belum nyala!*`)
   anu = antilink.indexOf(from)
   antilink.splice(anu, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK DI NONAKTIFKAN」*')
	} else {
const buttonstod = [{buttonId: `${prefix}antilink enable`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}antilink disable`, buttonText: {displayText: 'OF'}, type: 1}]
const patri = {
text: `Silahkan pilih salah satu di bawah`,
footer: `© ${setting.botName} bot`,
buttons: buttonstod,
headerType: 1
}
naimi.sendMessage(from, patri, {quoted:ftex})
}
break
  case 'sabar':
reply(`يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَ
ابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ

Wahai orang-orang yang beriman! Bersabarlah kamu dan kuatkanlah kesabaranmu dan tetaplah bersiap siaga (di perbatasan negerimu) dan bertakwalah kepada Allah agar kamu beruntung. (Ali Imran ayat 200) `)
break
  case 'kick': {
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await naimi.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
  case 'add': {
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await naimi.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
  case 'promote': {
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await naimi.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
  case 'demote': {
	  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await naimi.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
  case 'block': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await naimi.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
  case 'unblock': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await naimi.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
  case 'tagall': {
if (!m.isGroup) return reply(mess.group)
    if (isBan) return reply(mess.banned)
let teks = `*👥 Tag All*
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
naimi.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
  case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
    if (isBan) return reply(mess.banned)
naimi.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
  case 'group':   case 'grup': {
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
    await naimi.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await naimi.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await naimi.sendButtonText(m.chat, buttons, `Mode Group`, ` © ${setting.botName} bot`, m)

 }
}
break
  case 'linkgroup':   case 'linkgc': {
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
let response = await naimi.groupInviteCode(m.chat)
naimi.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
  case 'setmenu':
if (!isOwner) return reply(mess.owner)
setbot = db.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateDocument'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = true
reply(mess.success)
} else {
let sections = [
{
title: "CHANGE BOT MENU",
rows: [
{title: "Image Menu", rowId: `setmenu templateImage`, description: `Klik untuk mengubah menu ke Image Menu`},
{title: "Gif Menu", rowId: `setmenu templateGif`, description: `Klik untuk mengubah menu ke Gif Menu`},
{title: "Video Menu", rowId: `setmenu templateVideo`, description: `Klik untuk mengubah menu ke Video Menu`},
{title: "Text Menu", rowId: `setmenu templateMessage`, description: `Klik untuk mengubah menu ke Text Menu`},
{title: "Document Menu", rowId: `setmenu templateDocument`, description: `Klik untuk mengubah menu ke Document Menu`}
]
},
]
naimi.sendListMsg(m.chat, `Pilih salah satu mode menu di bawah`, `© ${setting.botName} bot`, '*CHANGE MENU*', `Click Here`, sections, m)
}
break
  case 'listpc': {
 if (!isOwner) return reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
 }
 naimi.sendTextWithMentions(m.chat, teks, m)
 }
 break
  case 'listgc': {
  if (!isOwner) return reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
let metadata = await naimi.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n=====================\n\n`
 }
 naimi.sendTextWithMentions(m.chat, teks, m)
 }
 break
  case 'listonline': case 'liston': {
   if (!m.isGroup) return reply('Cuma bisa di grub bro')
    if (isBan) return reply(mess.banned)
    
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
    let online = [...Object.keys(store.presences[id]), botNumber]
    naimi.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break


// list
  case 'ls':  case 'l':
let sections = [
{
title: "DAFTAR MENU RIVER SHOOP",
rows: [
{title: "CARA ORDER", rowId: `crd`, description: `*WAJIB BACA*`},
{title: "PAYMENT", rowId: `py`, description: `Payment`},
{title: "UC PUBG A", rowId: `uca`, description: `Paket A`},
{title: "UC PUBG B", rowId: `ucb`, description: `Paket B`},
{title: "PUBG PAKET SULTAN", rowId: `ucs`, description: `Paket S`},
{title: "UC PUBG ALL REGION", rowId: `ucall`, description: `UC all region`},
{title: "DM ML", rowId: `dmml`, description: `Mobile Legends Bang-Bang`},
{title: "JOIN RESELLER", rowId: `.reseller`, description: `Menu reseller`}
]
},
{
title: "INFO ADMIN/OWNER",
rows: [
{title: "ADMIN", rowId: `.admin2`, description: `Kontak Admin`},
{title: "INFO BOT", rowId: `.infobot`, description: `Info bot`},
]
}, 
]
naimi.sendListMsg(m.chat, `Hallo ${ucapanWaktu} @${pushname}\n`,`🔖 List : RIVER | FAMILY TOP-UP\n⌚ Jam : ${time2}\n📆 Tanggal : ${jangwak} `, `*LIST SHOOP SILAHKAN DI PILIH PRODUCKNYA*`, `Click Here`, sections, m)

///////MENU
break
  case 'jnnow':
  if(m.isGroup) reply(ordernow) & sendButMessage(sender, join1, join2, join3, {quoted: m})
break
  case 'reseller':  case 'res':
if(m.isGroup) {
  menu = `*JOIN RESSELER*
💢OPEN RESSELER RIVER | FAMILY 💢

❗ Price:
💸 80k

📌 *Contoh :*
- Rate RIVER | FAMILY
105 UC = 15.500rb
- Seller jual dengan menaikkan harga agar dapat profit. (105 UC = 16.500rb/...rb, dst.)
  
Mau tanya-tanya bisa Chat langsung
*ADMIN:* https://wa.me/6285173070283
  `
      buttonss2 = [
        {buttonId: `ls`, buttonText: {displayText: '⬅ BACK'}, type: 1},
        {buttonId: `jnnow`, buttonText: {displayText: '🛒 JOIN'}, type: 1}
  ]
  pa3 = {
  text: menu,
  footer: `© ${setting.botName} bot`,
  buttons: buttonss2,
  headerType: 1
  }
  naimi.sendMessage(from, pa3, {quoted:m})
}else {
menu = `*JOIN RESSELER*
💢OPEN RESSELER RIVER | FAMILY 💢

❗ Price:
💸 80k

📌 *Contoh :*
- Rate RIVER | FAMILY
105 UC = 15.500rb
- Seller jual dengan menaikkan harga agar dapat profit. (105 UC = 16.500rb/...rb, dst.)

Mau tanya-tanya bisa Chat langsung
ADMIN: https://wa.me/6285173070283
  `
  pa3 = {
  text: menu,
  footer: `© ${setting.botName} bot`,
  headerType: 1
  }
  naimi.sendMessage(from, pa3, {quoted:m})
}
break
  case 'ucall':
if(m.isGroup){
menu = `${ucapanWaktu} *@${pushname}*, Selamat datang di ${setting.botName}

*UC ALL REGION*
 
💸 60      ${" "}UC${" "} =${" "}${" "}Rp14.000
💸 180    ${" "}UC${" "} =${" "}${" "}Rp40.000
💸 240    ${" "}UC${" "} =${" "}${" "}Rp55.000
💸 325    ${" "}UC${" "} =${" "}${" "}Rp70.000
💸 660    ${" "}UC${" "} =${" "}${" "}Rp135.000
💸 900    ${" "}UC${" "} =${" "}${" "}Rp185.000
💸 1320  ${" "}UC${" "} =${" "}${" "}Rp270.000
💸 1800  ${" "}UC${" "} =${" "}${" "}Rp340.000
💸 2460  ${" "}UC${" "} =${" "}${" "}Rp470.000
💸 3850  ${" "}UC${" "} =${" "}${" "}Rp665.000
💸 4030  ${" "}UC${" "} =${" "}${" "}Rp705.000
💸 4510  ${" "}UC${" "} =${" "}${" "}Rp800.000
💸 5650  ${" "}UC${" "} =${" "}${" "}Rp1.000.000
💸 8100  ${" "}UC${" "} =${" "}${" "}Rp1.350.000
💸 10560${" "}UC${" "} =${" "}${" "}Rp1.800.000
💸 16200${" "}UC${" "} =${" "}${" "}Rp2.700.000
💸 24300${" "}UC${" "} =${" "}${" "}Rp4.000.000
💸 32400${" "}UC${" "} =${" "}${" "}Rp5.400.000
💸 40500${" "}UC${" "} =${" "}${" "}Rp6.700.000


Terimakasih telah menggunakan jasa kami, jangan lupa di order🤗
`
    buttonss2 = [
      {buttonId: `ls`, buttonText: {displayText: '⬅ BACK'}, type: 1},
      {buttonId: `order`, buttonText: {displayText: '🛒 ORDER'}, type: 1}
]
pa3 = {
text: menu,
footer: `NOTE : Harga dapat berubah-rubah setiap waktu`,
buttons: buttonss2,
headerType: 1
}
naimi.sendMessage(from, pa3, {quoted:m})
}else {
  reply(notgroup)
}
break
  case 'ucs':
if(m.isGroup){
menu = `${ucapanWaktu} *@${pushname}*,Selamat datang di ${setting.botName}

*UC PAKET SULTAN*

💸${" "} 9.900 ${" "}UC${" "}${" "}=${" "}${" "}Rp1.440.000
💸${" "}10.005${" "}UC${" "}${" "}=${" "}${" "}Rp1.455.000
💸${" "}11.000${" "}UC${" "}${" "}=${" "}${" "}Rp1.595.000
💸${" "}12.100${" "}UC${" "}${" "}=${" "}${" "}Rp1.750.000
💸${" "}13.200${" "}UC${" "}${" "}=${" "}${" "}Rp1.895.000
💸${" "}14.300${" "}UC${" "}${" "}=${" "}${" "}Rp2.050.000
💸${" "}15.400${" "}UC${" "}${" "}=${" "}${" "}Rp2.200.000
💸${" "}16.500${" "}UC${" "}${" "}=${" "}${" "}Rp2.370.000
💸${" "}17.600${" "}UC${" "}${" "}=${" "}${" "}Rp2.540.000
💸${" "}18.700${" "}UC${" "}${" "}=${" "}${" "}Rp2.695.000
💸${" "}19.800${" "}UC${" "}${" "}=${" "}${" "}Rp2.820.000
💸${" "}20.900${" "}UC${" "}${" "}=${" "}${" "}Rp3.010.000
💸${" "}30.800${" "}UC${" "}${" "}=${" "}${" "}Rp4.360.000
💸${" "}40.700${" "}UC${" "}${" "}=${" "}${" "}Rp5.750.000
💸${" "}50.600${" "}UC${" "}${" "}=${" "}${" "}Rp7.150.000


Terimakasih telah menggunakan jasa kami, jangan lupa di order🤗
`
    buttonss2 = [
      {buttonId: `ls`, buttonText: {displayText: '⬅ BACK'}, type: 1},
      {buttonId: `order`, buttonText: {displayText: '🛒 ORDER'}, type: 1}
]
pa3 = {
text: menu,
footer: `NOTE : Harga dapat berubah-rubah setiap waktu`,
buttons: buttonss2,
headerType: 1
}
naimi.sendMessage(from, pa3, {quoted:m})
}else {
  reply(notgroup)
}
break
  case 'ucb':
if(m.isGroup){
menu = `${ucapanWaktu} *@${pushname}*, Selamat datang di ${setting.botName}

*UC PAKET B*
 
💸${" "}1008${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}148.000
💸${" "}1061${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}152.000
💸${" "}1100${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}160.000
💸${" "}1205${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}176.000
💸${" "}1363${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}200.000
💸${" "}1415${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}208.000
💸${" "}1510${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}224.000
💸${" "}1599${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}232.000
💸${" "}1650${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}244.000
💸${" "}1755${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}260.000
💸${" "}1813${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}268.000
💸${" "}1925${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}280.000
💸${" "}2200${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}320.000
💸${" "}2463${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}360.000
💸${" "}2515${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}368.000
💸${" "}2756${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}404.000
💸${" "}2887${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}424.000
💸${" "}3025${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}440.000
💸${" "}3300${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}480.000
💸${" "}3405${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}496.000
💸${" "}3510${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}512.000
💸${" "}4013${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}588.000
💸${" "}4125${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}600.000
💸${" "}4400${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}640.000
💸${" "}5008${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}732.000
💸${" "}5225${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}760.000
💸${" "}6030${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}880.000
💸${" "}7010${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}1.008.000
💸${" "}7503${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}1.080.000
💸${" "}8015${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}1.160.000
💸${" "}8800${" "}UC${" "}${" "} = ${" "}${" "}Rp${" "}1.280.000


Terimakasih telah menggunakan jasa kami, jangan lupa di order🤗
`
    buttonss2 = [
{buttonId: `ls`, buttonText: {displayText: '⬅ BACK'}, type: 1},
{buttonId: `order`, buttonText: {displayText: '🛒 ORDER'}, type: 1}
]
pa3 = {
text: menu,
footer: `NOTE : Harga dapat berubah-rubah setiap waktu`,
buttons: buttonss2,
headerType: 1
}
naimi.sendMessage(from, pa3, {quoted:m})
}else {
  reply(notgroup)
}
break
  case 'uca':
if(m.isGroup){
menu = `${ucapanWaktu} *@${pushname}*, Selamat datang di ${setting.botName}

*UC PAKET A*
 
💸${" "}105${" "}UC${" "}${" "} = ${" "}${""}Rp16.000
💸${" "}131${" "}UC${" "}${" "} = ${" "}${""}Rp20.000
💸${" "}157${" "}UC${" "}${" "} = ${" "}${""}Rp24.000
💸${" "}183${" "}UC${" "}${" "} = ${" "}${""}Rp28.000
💸${" "}210${" "}UC${" "}${" "} = ${" "}${""}Rp32.000
💸${" "}263${" "}UC${" "}${" "} = ${" "}${""}Rp40.000
💸${" "}315${" "}UC${" "}${" "} = ${" "}${""}Rp48.000
💸${" "}368${" "}UC${" "}${" "} = ${" "}${""}Rp56.000
💸${" "}420${" "}UC${" "}${" "} = ${" "}${""}Rp64.000
💸${" "}530${" "}UC${" "}${" "} = ${" "}${""}Rp80.000
💸${" "}582${" "}UC${" "}${" "} = ${" "}${""}Rp86.000
💸${" "}608${" "}UC${" "}${" "} = ${" "}${""}Rp92.000
💸${" "}635${" "}UC${" "}${" "} = ${" "}${""}Rp96.000
💸${" "}687${" "}UC${" "}${" "} = ${" "}${""}Rp104.000
💸${" "}713${" "}UC${" "}${" "} = ${" "}${""}Rp108.000
💸${" "}766${" "}UC${" "}${" "} = ${" "}${""}Rp116.000
💸${" "}825${" "}UC${" "}${" "} = ${" "}${""}Rp120.000
💸${" "}841${" "}UC${" "}${" "} = ${" "}${""}Rp124.000
💸${" "}930${" "}UC${" "}${" "} = ${" "}${""}Rp136.000


Terimakasih telah menggunakan jasa kami, jangan lupa di order🤗
`
    buttonss2 = [
{buttonId: `ls`, buttonText: {displayText: '⬅ BACK'}, type: 1},
{buttonId: `order`, buttonText: {displayText: '🛒 ORDER'}, type: 1}
]
pa3 = {
text: menu,
footer: `NOTE : Harga dapat berubah-rubah setiap waktu`,
buttons: buttonss2,
headerType: 1
}
naimi.sendMessage(from, pa3, {quoted:m})
}else {
  reply(notgroup)
}
break

  case 'order' :
  if(m.isGroup) return reply(ordernow) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
break
  case 'crd':
if(m.isGroup){
 menu = `*CARA ORDER*

CONTOH FORMAT ORDER: UC PUBG/DM ML

ID : 5587557062
NICK : ATR٠ATR0٠٠
REGION : INDO
SISA UC/DM : 500 UC
ORDER : 1000 UC

*NOTE :*
- KETIKKAN */payment* UNTUK MELIHAT DAFTAR PAYMENT YANG YANG DAPAT ANDA GUNAKAN UNTUK MELANJUTKAN TRANSAKSI.

- (SELESAI MENGISI FORMAT ORDER KIRIM KE ADMIN PLUS BUKTI TF ) 

KONTAK ADMIN : https://wa.me/6285173070283
`
const buttonss1 = [
  {buttonId: `ls`, buttonText: {displayText: '⬅ BACK'}, type: 1},
    {buttonId: `order`, buttonText: {displayText: '🛒 ORDER'}, type: 1}
  ]
  const pa2 = {
    text: menu,
    footer: `© ${setting.botName} bot`,
    buttons: buttonss1,
    headerType: 1
  }
  naimi.sendMessage(from, pa2, {quoted:m})
}else {
  menu = `*CARA ORDER*

CONTOH FORMAT ORDER: UC PUBG/DM ML

ID : 5587557062
NICK : ATR٠ATR0٠٠
REGION : INDO
SISA UC/DM : 500 UC
ORDER : 1000 UC

*NOTE :*
- KETIKKAN */payment* UNTUK MELIHAT DAFTAR PAYMENT YANG YANG DAPAT ANDA GUNAKAN UNTUK MELANJUTKAN TRANSAKSI.

- (SELESAI MENGISI FORMAT ORDER KIRIM KE ADMIN PLUS BUKTI TF ) 

KONTAK ADMIN : https://wa.me/6285173070283
  `
// const buttonss1 = [{buttonId: `/list`, buttonText: {displayText: '⬅ BACK'}, type: 1},]
const pa2 = {
    text: menu,
    footer: `© ${setting.botName} bot`,
    headerType: 1
}
naimi.sendMessage(from, pa2, {quoted:m}) 
}
break
  case 'dmml':
menu = `${ucapanWaktu} *@${pushname}*, Selamat datang di ${setting.botName}

*DM ML*

*UP COMING*

Terimakasih telah menggunakan jasa kami, jangan lupa di order🤗
`
  buttonss2 = [
{buttonId: `ls`, buttonText: {displayText: '⬅ BACK'}, type: 1},
// {buttonId: `/order`, buttonText: {displayText: '🛒 ORDER'}, type: 1}
]
pa3 = {
text: menu,
footer: `NOTE : Harga dapat berubah-rubah setiap waktu`,
buttons: buttonss2,
headerType: 1
}
naimi.sendMessage(from, pa3, {quoted:m})
break
  case 'py': 
const cap = `*PAYMENT RIVER | FAMILY*

𝗗𝗔𝗡𝗔 
 082213520416
 (Imam Fadly)

𝗚𝗢𝗣𝗔𝗬 
 082213520416 
(Imam Fadly)

𝗢𝗩𝗢 
082213520416
 (Imam Fadly)

𝗕𝗥𝗜 
381801014488505
(Imam Fadly)

𝗤𝗥𝗜𝗦
(RIVER FAMILY STORE)
`
naimi.sendMessage(from, {image:fs.readFileSync('./karuta/menu.png'), caption: cap}, {quoted:m}).catch(() => reply('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))

break

// owner-admin
  case '///owner':  case '//creator': {
  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
    if (isBan) return reply(mess.banned)
naimi.sendContact(m.chat, setting.owner1, m)
}
break
  case 'owner2':  case 'admin2':
  const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${setting.ownerName}\n`
+ `ORG:${setting.deskripsi};\n`
+ `TEL;type=CELL;type=VOICE;waid=${setting.owner}:+${setting.owner}\n`
+ 'END:VCARD';
naimi.sendMessage(from, { contacts: { contacts: [{ vcard }] }});
break
  case 'infobot':
    if (isBan) return reply(mess.banned)
    let anubb = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
    const used = process.memoryUsage()
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
    let anubbgc = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)

stat=`
⚡ Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n,${oldd - neww} _miliseconds_\n⏳ Runtime : ${runtime(process.uptime())}

🤖 Namabot : ${setting.botName}
🐧 Platform : ${os.platform()}
‼️ Host name : ${os.hostname()}
🔰 Wa Version : 2.22.13.76
🔒 List Private Chat : ${anubb.length}
🧾 List Group : ${anubbgc.length}
⛔ Listban : ${banned.length}


💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NodeJS Memory Usaage*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
`
.trim()
reply(stat)
break

// menu
  case 'mn':  case 'menu' :
karutamddd = await reSize(`./karuta/karuta.png`, 200, 200) 
let btt = [{
quickReplyButton: {
displayText: '⋮☰ LIST',
id: 'ls'
}  
}, {
quickReplyButton: {
displayText: '💰 PAYMENT',
id: 'py'
}
}]
setbot = db.settings[botNumber]
if (setbot.templateImage) {
naimi.sendMessage(from, { caption: menulist, image: global.thumb, templateButtons: btt, footer:`© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateGif) {
naimi.sendMessage(from, { caption: menulist, video: global.vidmenu, gifPlayback: true, templateButtons: btt, footer: `© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateVid) {
naimi.sendMessage(from, { caption: menulist, video: global.vidmenu, templateButtons: btt, footer: `© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateVideo) {
naimi.sendMessage(from, { caption: menulist, video: global.vidmenu, templateButtons: btt, footer: `© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateMsg) {
naimi.sendMessage(from, { text: menulist, templateButtons: buttonsDefault, footer: `© ${setting.botName} bot`, mentions: [sender] })
} else if (setbot.templateDocument) {
let buttonmenu = [{
quickReplyButton: {
displayText: '⋮☰ LIST',
id: 'ls'
}  
}, {
quickReplyButton: {
displayText: '💰 PAYMENT',
id: 'py'
}
}]
naimi.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./karuta/karuta.xlsx'), mimetype: `${docs}`, jpegThumbnail:fs.readFileSync("./karuta/menu.png"), fileName: `${setting.botName}`, templateButtons: buttonmenu, footer: `© ${setting.botName} bot`, mentionedJid: [m.sender] })
}
setTimeout( () => {
 naimi.sendMessage(from, { react: { text: ``, key: m.key }})
}, 3000)
break
default:
if (budy.startsWith('sendkontak')) {
  const kasihkon = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${pushname}\n`
+ `ORG:${pushname};\n`
+ `TEL;type=CELL;type=VOICE;waid=${sender}:+${sender}\n`
+ 'END:VCARD';
naimi.sendMessage(from, { contacts: { contacts: [{ kasihkon }] }});
}
if (budy.startsWith('=>')) {
    if (!isOwner) return reply(mess.owner)
    function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
    }
    try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isOwner) return reply(mess.owner)
    try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
    } catch (err) {
await reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isOwner) return reply(mess.owner)
    exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
    })
}
	
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
    this.anonymous = this.anonymous ? this.anonymous : {}
    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
    if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
    }
    return !0
}
	
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
naimi.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


    } catch (err) {
  naimi.sendMessage(m.key.remoteJid, { text: `*[TERJADI ERROR]*\n${err}` }, { quoted: m })
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})