const db = require('./firestoreClient')

const players = [
    {
        "key": "alphonse",
        "name": "Alphonse",
        "avatar": "http://placekitten.com/g/63/63"
    },
    {
        "key": "anomen",
        "name": "Keldorn",
        "avatar": "http://placekitten.com/g/62/62"
    },
    {
        "key": "fargrim",
        "name": "Fargrim",
        "avatar": "http://placekitten.com/g/61/61"
    },
    {
        "key": "jack",
        "name": "Jack",
        "avatar": "http://placekitten.com/g/64/64"
    },
    {
        "key": "lia",
        "name": "Lia",
        "avatar": "http://placekitten.com/g/60/60"
    },
    {
        "key": "sigur",
        "name": "Sigur",
        "avatar": "http://placekitten.com/g/65/65"
    }
]

const monsters = [
    {
        "key": "chuul",
        "avatar": "http://placekitten.com/g/68/68"
    }
]

const sync = async () => {
    for (let player of players) {
        await db.collection('players').doc(player.key).set(player)
    }
    for (let monster of monsters) {
        await db.collection('monsters').doc(monster.key).set(monster)
    }
    
    process.exit(0)
}

sync()
