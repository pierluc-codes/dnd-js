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
            initiative: 15,
            base: keldornRef,
            reaction: true,
            conditions: [
            ],
            concentration: {
                name: "Aura of life"
            }
        },
        {
            id: 2,
            show: true,
            initiative: 13,
            base: liaRef,
            reaction: true,
              conditions: [
                {
                    id: "0_AuraOfLife",
                    name: "Aura of life",
                    isBonus: true
                }]
        },
        {
            id: 5,
            show: true,
            active: false,
            initiative: 14,
            base: jackRef,
            reaction: true,
            conditions: []
        },
        {
            id: 6,
            show: true,
            initiative: 19,
            base: alphonseRef,
            reaction: true,
            conditions: [
                {
                    id: "0_AuraOfLife",
                    name: "Aura of life",
                    isBonus: true
                }]
        },
        {
            id: 7,
            show: true,
            initiative: 13,
            base: sigurRef,
            reaction: true,
            conditions: [
                {
                    id: "0_AuraOfLife",
                    name: "Aura of life",
                    isBonus: true
                }],
            deathSaving: {
                success: 0,
                failure: 0
            }
        },
        {
            id: 8,
            show: true,
            initiative: 13,
            base: fargrimRef,
            reaction: true,
            conditions: [
                {
                    id: "0_AuraOfLife",
                    name: "Aura of life",
                    isBonus: true,
                    countdown: 10
                }
            ]
        },
        {
            id: 9,
            show: true,
            initiative: 3,
            base: aenilRef,
            reaction: true,
            conditions: [
                {
                    id: "0_AuraOfLife",
                    name: "Aura of life",
                    isBonus: true
                }
            ]
        },
        {
            id: 10,
            show: true,
            initiative: 9,
            base: chuulRef,
            monsterName: "Swift (rouge)",
            reaction: true,
            conditions: []
        },
        {
            id: 11,
            show: false,
            initiative: 9,
            base: chuulRef,
            monsterName: "Soirée (gris)",
            reaction: true,
            conditions: [
                {
                    id: "0_Hex",
                    name: "Hex str",
                    isBonus: false
                }
            ]
        }
    ]
}

const syncEncounter = async () => {
    await db.collection('encounters').doc('miniatures_toat').set(encounter)
    process.exit(0)
}

syncEncounter()
