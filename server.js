const mineflayer = require('mineflayer');
const dotenv = require('dotenv');




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
                username: process.env.BOTNAME,            // Nama pengguna bot
                version: process.env.MINECRAFT_VERSION               // Versi Minecraft yang sama dengan server kamu
            });
            // bot.on('spawnReset', ()=>{
            //     console.log('Bot telah respawn')
            // })
            bot.on('spawn', () => {
                console.log(`${process.env.BOTNAME} sedang aktif, dan menjaga world`);
            });

            bot.on('error', err => {
                console.error('Error:', err);
            });

            bot.on('end', () => {
                // console.clear()
                console.log(`${process.env.BOTNAME} Mokad, Try to Connect ${connects} times`);
                connect()
            });
            bot.on('death', () => {
                bot.respawn()
            })
            bot.on('playerLeft', () => {
                connect()
            })
            bot.on('kicked', () => {
                connect()
            })
        }
        connect()
        // console.clear()
    } catch (err) {
        console.error('Error:', err);
    }
}