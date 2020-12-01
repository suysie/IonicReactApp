const mqtt   = require('mqtt');

class MQTT {
    private client: any; 
    constructor(){
        this.client  = mqtt.connect('wss://mqtt.wdaan.tools');
    }

    getClient(){
        return this.client
    }
}

const koekje = new MQTT()
export { koekje }
