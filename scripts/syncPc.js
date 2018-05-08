const db = require('./firestoreClient')

const players = [
    {
        "key": "alphonse",
        "name": "Alphonse",
        "avatar": "https://storage.googleapis.com/dnd-js.appspot.com/avatars/alphonse.png"
    },
    {
        "key": "keldorn",
        "name": "Keldorn",
        "avatar": "https://storage.googleapis.com/dnd-js.appspot.com/avatars/keldorn.png"
    },
    {
        "key": "fargrim",
        "name": "Fargrim",
        "avatar": "https://storage.googleapis.com/dnd-js.appspot.com/avatars/fargrim.png"
    },
    {
        "key": "jack",
        "name": "Jack",
        "avatar": "https://storage.googleapis.com/dnd-js.appspot.com/avatars/jack.png"
    },
    {
        "key": "lia",
        "name": "Lia",
        "avatar": "https://storage.googleapis.com/dnd-js.appspot.com/avatars/lia.png"
    },
    {
        "key": "sigur",
        "name": "Sigur",
        "avatar": "https://storage.googleapis.com/dnd-js.appspot.com/avatars/sigur.png"
    },
    {
        "key": "aenil",
        "name": "Aenil",
        "avatar": "https://storage.googleapis.com/dnd-js.appspot.com/avatars/aenil.png"
    }
]

const monsters = [
    {
        "key": "chuul",
        "avatar": "https://storage.googleapis.com/dnd-js.appspot.com/avatars/monsters/chuul.png"
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
