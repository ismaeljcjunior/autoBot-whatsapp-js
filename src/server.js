// import { VenomBot } from '../src/services/venom/venom.js';
import { VenomBot } from '../src/services/venom/venom.js';
// import { stages, getStage } from '../src/controllers/stages.js'
import { stages, getStage } from '../src/services/venom/venom.js';



const main = async () => {
    try {
        const venombot = await VenomBot.getInstance().init({
            session: 'Api_test',
            headless: true,
            useChrome: false,
        })

        venombot.onMessage(async (message) => {
            if (message.isGroupMsg) return

            const currentStage = getStage({ from: message.from })

            await stages[currentStage].stage.exec({
                from: message.from,
                message: message.body,
            })
        })
    } catch (error) {
        console.error(error)
    }
}

main()