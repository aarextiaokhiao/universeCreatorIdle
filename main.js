

var version = 0.0;
var user = {
    gravicles: 10,
    mk1:{
        cost:10,
        amount:0,
        multiplier:1,
        base:0,
        previousTierCost:0,
        costMult:1.15
    },
    mk2:{
        cost:100,
        amount:0,
        multiplier:1,
        base:0,
        previousTierCost:10,
        costMult:1.16
    },
    mk3:{
        cost:10,
        amount:0,
        multiplier:1,
        base:0,
        previousTierCost:10,
        costMult:1.17
    },
    mk4:{
        cost:10,
        amount:0,
        multiplier:1,
        base:0,
        previousTierCost:10,
        costMult:1.18
    },
    mk5:{
        cost:10,
        amount:0,
        multiplier:1,
        base:0,
        previousTierCost:10,
        previousTierCost:10,
        costMult:1.19
    },
    mk6:{
        cost:10,
        amount:0,
        multiplier:1,
        base:0,
        unlocked:false,
        previousTierCost:10,
        costMult:1.20
    },
    mk7:{
        cost:10,
        amount:0,
        multiplier:1,
        base:0,
        unlocked:false,
        previousTierCost:10,
        costMult:1.21
    },
    mk8:{
        cost:10,
        amount:0,
        multiplier:1,
        base:0,
        unlocked:false,
        previousTierCost:10,
        costMult:1.22
    },
    mk9:{
        cost:10,
        amount:0,
        multiplier:1,
        base:0,
        unlocked:false,
        previousTierCost:10,
        costMult:1.23
    },
    wells:{
        cost:20,
        tiercost:5,
        defaultMults:4,
        totalMult:1,
        amount:0,
        costScale:20
    },
    pulse:{
        cost:5,
        amount:0
    },
    points:{
        amount:0
        
        
    }


};




function getPulseReward(wells){
    return 1+Math.sqrt(wells/2000)
}

function buyMK(tier) {
    var tierCost = user["mk"+tier].previousTierCost
    var gravCost = user["mk"+tier].cost
    var costMult = user["mk"+tier].costMult
    if (tier == 1){
        if (gravCost <= user.gravicles){
            user.gravicles -= gravCost
            user.["mk"+tier].cost *= costMult
            ##what should the multiplier formula be? rn im gonna make it 1% stronger
            user["mk"+tier].multiplier *= 1.01
        }
    }
    if (gravCost <= user.gravicles && tierCost <= user["mk"+(tier-1)].base){
        user.gravicles -= gravCost
        user.["mk"+tier].cost *= costMult
        ##what should the multiplier formula be? rn im gonna make it 1% stronger
        user["mk"+tier].multiplier *= 1.01
        user["mk"+(tier-1)].base -= tierCost
    }
}






