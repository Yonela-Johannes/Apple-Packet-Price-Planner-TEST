import { PricePlanner } from "../main.js";


mocha.setup('bdd');
let assert = chai.assert;
mocha.checkLeaks();
mocha.run();

describe('Apple Packet Price Planner Test', () => {
    it('it should set box cost', () => {
        const pricePlanner = PricePlanner()
        pricePlanner.setBoxCost(200)
        assert.equal(200, pricePlanner.getBoxCost())
    })
    it('it should set number of apples', () => {
        const pricePlanner = PricePlanner()
        pricePlanner.setNumOfApples(60)
        assert.equal(60, pricePlanner.getNumOfApples())
    })

    it('it should set number of apples in packet', () => {
        const pricePlanner = PricePlanner()
        pricePlanner.setNumApplesInPacket(5)
        assert.equal(5, pricePlanner.getNumOfApplesInPacket())
    })

    it('it should set required profit', () => {
        const pricePlanner = PricePlanner()
        pricePlanner.setProfit(20)
        assert.equal(20, pricePlanner.getProfit())
    })
    it('it should calculate number of packets', () => {
        const pricePlanner = PricePlanner()
        pricePlanner.setNumOfApples(60)
        pricePlanner.setNumApplesInPacket(5)
        assert.equal(12, pricePlanner.numOfPackets())
    })
    it('it should get cost price', () => {
        const pricePlanner = PricePlanner()
        pricePlanner.setBoxCost(200)
        pricePlanner.setNumOfApples(60)
        pricePlanner.costPrice()
        assert.equal(3.33, pricePlanner.getCostPrice())
    })
    it('it should get packet cost', () => {
        const pricePlanner = PricePlanner()
    })
    it('it should set new required profit', () => {
        const pricePlanner = PricePlanner()
    })

})