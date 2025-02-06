

const { 𝐛𝐚𝐫𝐚𝐜𝐤 } = require("../𝐁𝐚𝐫𝐚𝐜𝐤/𝐨𝐛𝐚𝐦𝐚");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../lib/sudo")
const conf = require("../config");

𝐛𝐚𝐫𝐚𝐜𝐤({ nomCom: "owner", categorie: "General", reaction: "🚘" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

𝐛𝐚𝐫𝐚𝐜𝐤({ nomCom: "dev", categorie: "General", reaction: "🚘" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: " 𝐁𝐚𝐫𝐚𝐜𝐤 𝐎𝐛𝐚𝐦𝐚", numero: "254717261760" },
      { nom: "᚛𝐁𝐚𝐫𝐚𝐜𝐤 𝐎𝐛𝐚𝐦𝐚᚜", numero: "254717261760" },
      { nom: "🅑︎🅐︎🅡︎🅐︎🅒︎🅚︎", numero: "254717261760" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "WELCOME TO BWM XMD HELP CENTER! ASK FOR HELP FROM ANY OF THE DEVELOPERS BELOW:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

𝐛𝐚𝐫𝐚𝐜𝐤({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("THANK YOU FOR CHOOSING BMW, HERE ARE OUR SUPPORTIVE LINKS\n\n ☉ CHANNEL LINK IS HERE ☉ \n\n❒⁠⁠⁠⁠https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y\n\n ☉YOUTUBE LINK IS HERE ☉\n\n❒⁠⁠⁠⁠[https://www.youtube.com/@ibrahimaitech] \n\n\n𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔") 
  await zk.sendMessage(auteurMessage,{text : `THANK YOU FOR CHOOSING BWM XMD MAKE SURE YOU FOLLOW THESE LINKS. `},{quoted :ms})

})
