//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUptUVlmQmo3T1NKaVgzVFNNNDZTUDYxWGZJSThWZWpKSkhZKyt5WUNrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2NSejY4RGQxSU9XSUpvbUd2emp2YUtVdHZYajgrR2MrbFlQNFVVcGUwUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSzlodG96K0xRMVNaQUJWbGl6NEg2UGdtWkdDQUdBbEtQZGhidHZCUW5ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvd2RLNmpaMVFSZUY2R2grQzhibmdjaTRuTzEyUU40MlZFNVN4eit6UnhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNbVZXbnFVU3VQcWFBc2FnYVBBa1diQ3lPdlRtZitWbDBYb2ZUdC9mbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdkSlFwNVl0anBxUURTRWRkZlR1TFk4Y2pSR1ovZlV1V0RJNWVoTC9LMlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1SM3FaZDR4c0kxWFI2cit2SG1XOXVZOXlncUdDTFFISjFONHVuc0MyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoield0SVo5NDBuZGluS05NMjlRd25FcUJXVXlrOTZ5TUU0QzUrS0cva1JRMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxMcjZyUEhpQ2xzeS9WOXJWRnE5L05uVG5XVC9PcnhyQ3JMbTB4OExrYXRIem4rT0dhMEI5QjU1ZlE4c1p5SnZWeVlqMXJmNXBnQzJxTFRPaFA0SGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiIwMkUrL05FOGR1VFY1dTdlZVlHb0VZek5xbHNmUWZoaEUvdjlncXhCVk9RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHZjl0eW92SFNtYVlHU1NGTVY1WmlRIiwicGhvbmVJZCI6ImE1YTgxZmZhLTY4NTktNGVmZS04NzJhLWJkYzI0OTRmNGM2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGNXMxMitWSm9wS1p0OHBXbXZQYkJIZmJldHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1ZXZlYvVHR3VEQ3VFRkbkdoTVdTQ0xPOFg4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik0zWkVDNkhLIiwibWUiOnsiaWQiOiIyNTQ3MDQwMDM4ODI6MTZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pqMHhwNEJFSWY1bjc4R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik0yODdCRUIxQ0poUUdxdlk0Zzc4QU4zb1hSOVVMSm5HOEEwVFdBSldTMWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNBcEFqYUgyaUtOSWdIQjBmcFZsalloRkRYN2dXeGpsRlNLUjRpbEVQdWxRQWlibUNJVHBtZnN1cUFFVTJLZit5bkYyYmpDWGxqckd3cHN3SmxSY0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSZXZHSkpwZjlGcjhxbDI1U0RFMGZONStnbDFOcGlrczlIelRJU0ROVitWbndBTURpTkVVQlZpN3J5RTBkT1g0ako1Q0lBTzduWG5ocEdKWkRQR1lqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNDAwMzg4MjoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUTnZPd1JBZFFpWVVCcXIyT0lPL0FEZDZGMGZWQ3laeHZBTkUxZ0NWa3RYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQzMjU2NzI0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUkxdSJ9'; 


const session = sessionId.replace('NEIMAN-TECH-SESSION-ID;;;=>.','');
const prefix = process.env.PREFIX || '%';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || '𝐍ᴇɪᴍᴀɴ 𝐌ᴀʀᴄᴜs';
const packname = process.env.PACKNAME || 'GEFF';
const dev = process.env.OWNER_NUMBER || '254704003882';
const fridayActive = process.env.FRIDAY || "true"; //you can always deactivate by typing (friday off)
const DevMarcus = dev.split(",");
const botname = process.env.BOTNAME || 'Sᴛᴀʀᴋ-ᴍᴅ';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'typing';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://media-database-mcjv.onrender.com/media/images/a98e77ee75af1bf5d5d49fc6e840f123.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb9EZIl60eBdl8fIY10p';
const reactemoji = process.env.EMOJI || '⚒️';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || '❌ This Residence Cannot Pick Your Call At This Time Please Leave A Message 😌';
const autobio = process.env.AUTOBIO || 'true';

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: true,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: true,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl, 
  antibad: groupControl, 
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevMarcus,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete,
  fridayActive
};
