const {𝐛𝐚𝐫𝐚𝐜𝐤 }= require ('../𝐎𝐛𝐚𝐦𝐚/𝐛𝐚𝐫𝐚𝐜𝐤') ;
const {addstickcmd, deleteCmd, getCmdById, inStickCmd , getAllStickCmds} = require('../lib/stickcmd') ;



𝐛𝐚𝐫𝐚𝐜𝐤(
    {
        nomCom : 'setcmd',
        categorie : 'stickcmd'
        
    }, async (dest,zk,commandeOptions) => { 

   const {ms , arg, repondre,superUser , msgRepondu} = commandeOptions;

    if (!superUser) { repondre('you can\'t use this command') ; return} ;

      if(msgRepondu && msgRepondu.stickerMessage )  {
  
         if(!arg || !arg[0]) { repondre('put the name of the command') ; return} ;
          
        
         await addstickcmd(arg[0].toLowerCase() , msgRepondu.stickerMessage.url ) ;

         repondre('Stick cmd save successfully')

      } else {

        repondre('mention a sticker')
      }

    }) ; 

    𝐛𝐚𝐫𝐚𝐜𝐤(
      {
          nomCom: 'delcmd',
          categorie: 'stickcmd'
      },
      async (dest, zk, commandeOptions) => {
  
          const { ms, arg, repondre, superUser } = commandeOptions;
  
          if (!superUser) {
              repondre('only Mods can use this command');
              return;
          }
  
          if (!arg || !arg[0]) {
              repondre('put the name of the command that you want to delete');
              return;
          }
  
          const cmdToDelete = arg[0];

  
          try {
              await deleteCmd(cmdToDelete.toLowerCase());
              repondre(`the commande ${cmdToDelete} is deleted successfully.`);
          } catch {
              repondre(`the command ${cmdToDelete} don't existe`);
          }
      }
  );
  

  𝐛𝐚𝐫𝐚𝐜𝐤(
    {
        nomCom: 'allcmd',
        categorie: 'stickcmd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, superUser } = commandeOptions;

        if (!superUser) {
            repondre('only Mods can use this command');
            return;
        }

        const allCmds = await getAllStickCmds();

        if (allCmds.length > 0) {
            const cmdList = allCmds.map(cmd => cmd.cmd).join(', ');
            repondre(`*List of all stickcmd :*
 ${cmdList}`);
        } else {
            repondre('No stickcmd save');
        }
    }
);
