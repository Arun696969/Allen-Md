const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="death69ban@proton.me"
global.location="Asia/kolkata"


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Garuna69/Allen-Md";
global.gurl =process.env.GURL  || "https://whatsapp.com/channel/0029Vaf78QkBA1evbzjbGO39";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vaf78QkBA1evbzjbGO39" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 💧⃟❤️‍🩹✨⃝𝑨𝑳𝑳𝑬𝑵 𝑶𝑩𝑬𝑹𝑶𝑰𝑰✨⃝🐦‍🔥" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "989232205989,919034941583";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "989232205989";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/hGbxMP35/IMG-20241211-WA0045.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_51_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDczLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMCxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnUnpFN1RrL0ZPOGJ4THUyd3lDZ3B5U2N1dGczeXVhUndURWtodUYxU3hJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk4OTIzMjIwNTk4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjJBNzI4NjQyRjk1RjgwOEY0QzdDQTE5QTZEMjA3MzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ0OTUxOTA4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTg5MjMyMjA1OTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMTk1RDVGODZENDc1QkVBQ0ZGMTdGQzQ5MzNENEQ4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQ5NTE5MDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkpPc3ZBSFBRcmVvWDJpQXJDQkkwd1wiLFxuICBcInBob25lSWRcIjogXCJhNDM5YzYyNS1mN2FiLTQ2YjYtYWIwNy1lOTZkNTYxMDhjYjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMTY5LFxuICAgICAgOTQsXG4gICAgICAyNDgsXG4gICAgICAxOTIsXG4gICAgICAxODMsXG4gICAgICAyNTEsXG4gICAgICAyLFxuICAgICAgMjgsXG4gICAgICAxMTgsXG4gICAgICAxODMsXG4gICAgICA0NixcbiAgICAgIDI0OSxcbiAgICAgIDIzNixcbiAgICAgIDUzLFxuICAgICAgMTg4LFxuICAgICAgMTQyLFxuICAgICAgMzUsXG4gICAgICAxNzYsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMjEsXG4gICAgICAxMDUsXG4gICAgICAxMTUsXG4gICAgICAyMTIsXG4gICAgICAxNTQsXG4gICAgICAxMTEsXG4gICAgICA2MSxcbiAgICAgIDI0OSxcbiAgICAgIDExOCxcbiAgICAgIDIyMyxcbiAgICAgIDIwMSxcbiAgICAgIDE0OSxcbiAgICAgIDEsXG4gICAgICA1NixcbiAgICAgIDgwLFxuICAgICAgMTM3LFxuICAgICAgMTk3LFxuICAgICAgMTE0LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDlGUzZOMzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk4OTIzMjIwNTk4OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MjU2MzA4ODM4NjM4OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Rv/Cdkasg8J2RsvCdkbDwnZG18J2RriDwn4e18J+HsPCfkZHwn5KfXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJCdWFvSEVOKzBoOEFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLTUduQjNYRmZHcTZEbW9WMGhFMTBQQldYZjZVQWZGYTlEdG0wOTFIeld3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlmQXBjUGE0VlV0QlVSUGxBcTN0QnpSSHVmR2pxYnZTQ3VDTGE2bW40RUxybitoWE14aFN1QzlqZXBJYXMyT1o5VDVoVi8yTEVjckNqdzV4NStBa0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRTOVY1U3RmTG51aXdOWk1EMFhZNkI5ZTdXOEZ1U2trV0drejFXQTd2TmdNVjBNRHRvdDZyRVVrUDFFTVBDNUhDT0tFdHJ0YksyQWVjSHRCQSs3bWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk4OTIzMjIwNTk4OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDk1MTkwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwrcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTCtwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOEVlTzhhUEZDdDRDVWhza2xlQ3ZoTlJUSDdoczh2SWRiaWdBcWRSNzUwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTY4MDYyNzE3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDk0OTI4OTkwM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "💧⃟❤️‍🩹✨⃝𝑨𝑳𝑳𝑬𝑵 𝑶𝑩𝑬𝑹𝑶𝑰𝑰✨⃝🐦‍🔥" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🍃",
  packname: process.env.PACK_NAME || "⏤͟͟͞➣⃟⃟🖤Ꮓᴀʀᴀ~ ⃟⃟⃟⃟🦇",
  botname : process.env.BOT_NAME  || "❤‍🩹𝚯𝚪𝚰𝚴💸",
  ownername:process.env.OWNER_NAME|| "Allen",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
