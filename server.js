const mineflayer = require('mineflayer');
const keep_alive = require('./keep_alive');

keep_alive()
var connects = 0
try{
    const connect = () =>{
        connects = connects + 1
        const bot = mineflayer.createBot({
            host: 'server_dadakan.aternos.me', // Ganti dengan IP server Aternos kamu
            port:  44671,                    // Port default Minecraft, ganti jika berbeda
            username: 'Kuncen_Dadakan',            // Nama pengguna bot
            version: '1.20'               // Versi Minecraft yang sama dengan server kamu
        });
        // bot.on('spawnReset', ()=>{
        //     console.log('Bot telah respawn')
        // })
        bot.on('spawn', () => {
            console.log('Bot has spawned in the game.');
        });
        
        bot.on('error', err => {
            console.error('Error:', err);
        });
        
        bot.on('end', () => {
            console.clear()
            console.log('Bot telah mati.' + connects);
        });
        bot.on('death', ()=>{
            bot.respawn()
            connect()
        })
        bot.on('playerLeft', ()=>{
            connect()
        })
        bot.on('kicked', ()=>{
            connect()
        })
    }
    connect()
    console.clear()
} catch (err){
    console.error('Error:', err);
}