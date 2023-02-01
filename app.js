const { Client } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate:false});
const {durum, type, isim, applicid, detaylar, state, büyükResim, küçükResim, büyükResimText, küçükResimText, token} = require("./cfg")
const { RichPresence, Util} = require('discord.js-selfbot-rpc');

client.on('ready', async() => {

    const büyükResimm = await Util.getAssets(applicid, büyükResim);
    const küçükResimm = await Util.getAssets(applicid, küçükResim);

    //--cfg.js den ayarlayın.
    const presence = new RichPresence().setStatus(durum).setType(type).setName(isim).setApplicationId(applicid).setDetails(detaylar).setState(state).setAssetsLargeImage(büyükResimm.id).setAssetsLargeText(büyükResimText).setAssetsSmallImage(küçükResimm.id).setAssetsSmallText(küçükResimText)
    //--cfg.js den ayarlayın.
    
    console.log(`${client.user.tag} -- Olarak Giriş Yapıldı.`);

    client.user.setPresence(presence.toData());
    console.log('Rich Presence Aktif Oldu...');

    
});

client.login(token);