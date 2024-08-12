const mineflayer = require('mineflayer');
const dotenv = require('dotenv')



try {
    dotenv.config()
} catch (err) {
    console.log(err)
} finally {
    // const keep_alive = require('./keep_alive');

    var connects = 0
    try {
        const connect = () => {
            connects = connects + 1
            const bot = mineflayer.createBot({
                host: process.env.SERVER_ATERNOS, // Ganti dengan IP server Aternos kamu
                port: process.env.PORT_SERVER,                    // Port default Minecraft, ganti jika berbeda
                username: process.env.BOT_NAME,            // Nama pengguna bot
                version: process.env.MINECRAFT_VERSION               // Versi Minecraft yang sama dengan server kamu
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
                setTimeout(()=>{
                    connect()
                },1000)
            });
            bot.on('death', () => {
                bot.respawn()
                connect()
            })
            bot.on('playerLeft', () => {
                connect()
            })
            bot.on('kicked', () => {
                connect()
            })
        }
        connect()
        console.clear()
    } catch (err) {
        console.error('Error:', err);
    }
}