const mineflayer = require('mineflayer');


var connects = 0
try{
    const connect = () =>{
        connects = connects + 1
        const bot = mineflayer.createBot({
            host: 'server_dadakan.aternos.me', // Ganti dengan IP server Aternos kamu
            port:  44671,                    // Port default Minecraft, ganti jika berbeda
            username: 'BotName',            // Nama pengguna bot
            version: '1.20'               // Versi Minecraft yang sama dengan server kamu
        });
        
        bot.on('spawn', () => {
            console.log('Bot has spawned in the game.');
        });
        
        bot.on('error', err => {
            console.error('Error:', err);
        });
        
        bot.on('end', () => {
            console.clear()
            console.log('Bot disconnected from the server.' + connects);
            connect()
        });
    }
    connect()
    console.clear()
} catch (err){
    console.error('Error:', err);
}