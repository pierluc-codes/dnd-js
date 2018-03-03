const db = require('./firestoreClient')

const alphonseRef = db.collection('players').doc('alphonse')
const anomenRef = db.collection('players').doc('anomen')
const fargrimRef = db.collection('players').doc('fargrim')
const jackRef = db.collection('players').doc('jack')
const liaRef = db.collection('players').doc('lia')
const sigurRef = db.collection('players').doc('sigur')

const encounter = {
    "characters": [
        {
            id: 1,
            show: true,
            initiative: 19,
            base: anomenRef,
            reaction: true,
            conditions: [
                {
                    id: "0_DivineShield",
                    name: "Divine shield",
                    isBonus: true
                }
            ],
            concentration: {
                name: "Faith armor"
            }
        },
        {
            id: 2,
            show: true,
            initiative: 19,
            base: liaRef,
            reaction: false,
            conditions: []
        },
        {
            id: 5,
            show: true,
            active: true,
            initiative: 16,
            base: jackRef,
            reaction: true,
            conditions: []
        },
        {
            id: 6,
            show: true,
            initiative: 16,
            base: alphonseRef,
            reaction: true,
            conditions: [
                {
                    id: "0",
                    name: "Poisoned",
                    isPenalty: true
                }
            ]
        },
        {
            id: 7,
            show: true,
            initiative: 11,
            base: sigurRef,
            reaction: true,
            conditions: [
                {
                    id: "0",
                    name: "Unconcious",
                    isPenalty: true
                },
                {
                    id: "1",
                    name: "Poisoned",
                    countdown: 2,
                    isPenalty: true
                },
                {
                    id: "2",
                    name: "Paralyzed",
                    countdown: 33,
                    isPenalty: true
                },
                {
                    id: "3",
                    name: "Blessed",
                    isBonus: true
                }
            ],
            deathSaving: {
                success: 2,
                failure: 1
            }
        },
        {
            id: 8,
            show: true,
            initiative: 1,
            base: fargrimRef,
            reaction: true,
            conditions: [
                {
                    id: "0",
                    name: "Poisoned",
                    isPenalty: true
                }
            ]
        }
    ]
}

const syncEncounter = async () => {
    await db.collection('encounters').doc('jyaAnXdhNU2GSQGAcgkg').set(encounter)
    process.exit(0)
}

syncEncounter()
