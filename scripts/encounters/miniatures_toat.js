const db = require('../firestoreClient')

const alphonseRef = db.collection('players').doc('alphonse')
const keldornRef = db.collection('players').doc('keldorn')
const fargrimRef = db.collection('players').doc('fargrim')
const jackRef = db.collection('players').doc('jack')
const liaRef = db.collection('players').doc('lia')
const sigurRef = db.collection('players').doc('sigur')
const aenilRef = db.collection('players').doc('aenil')

const chuulRef = db.collection('monsters').doc('chuul')

const encounter = {
    "characters": [
        {
            id: 1,
            show: true,
            initiative: 1,
            base: keldornRef,
            reaction: true,
            conditions: [],
            concentration: {}
        },
        {
            id: 2,
            show: true,
            initiative: 2,
            base: liaRef,
            reaction: true,
            conditions: []
        },
        {
            id: 5,
            show: true,
            active: false,
            initiative: 3,
            base: jackRef,
            reaction: true,
            conditions: []
        },
        {
            id: 6,
            show: true,
            initiative: 4,
            base: alphonseRef,
            reaction: true,
            conditions: [ ]
        },
        {
            id: 7,
            show: true,
            initiative: 5,
            base: sigurRef,
            reaction: true,
            conditions: [],
            deathSaving: {
                success: 0,
                failure: 0
            }
        },
        {
            id: 8,
            show: true,
            initiative: 6,
            base: fargrimRef,
            reaction: true,
            conditions: [
            ]
        },
        {
            id: 9,
            show: true,
            initiative: 7,
            base: aenilRef,
            reaction: true,
            conditions: [
            ]
        },
        {
            id: 10,
            show: true,
            initiative: 8,
            base: chuulRef,
            monsterName: "Chuul 1",
            reaction: true,
            conditions: []
        },
        {
            id: 11,
            show: true,
            initiative: 9,
            base: chuulRef,
            monsterName: "Chuul 2",
            reaction: true,
            conditions: []
        }
    ]
}

const syncEncounter = async () => {
    await db.collection('encounters').doc('miniatures_toat').set(encounter)
    process.exit(0)
}

syncEncounter()
