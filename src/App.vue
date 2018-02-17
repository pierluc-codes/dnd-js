<template>
    <div class="container">
        <PlayerList :players="players" />
    </div>
</template>

<script>
import PlayerList from './PlayerList'

export default {
    data() {
        return {
            players: [
                {
                "id": 1,
                "initiative": 19,
                "image": "http://placekitten.com/g/64/64",
                "name": "Anomen",
                "reaction": true,
                "conditions": [
                    {
                        "id": "0_DivineShield",
                        "name": "Divine shield",
                        "isBonus": true
                    }
                ],
                "concentration": {
                    "name": "Faith armor"
                }
                },
                {
                "id": 2,
                "initiative": 19,
                "image": "http://placekitten.com/g/64/64",
                "name": "Liaaaaa",
                "reaction": false,
                "conditions": [
                ] 
                },
                {
                "id": 3,
                "initiative": 18,
                "image": "http://placekitten.com/g/64/64",
                "name": "Gros zombie",
                "reaction": true,
                "conditions": [
                ] 
                },
                {
                "id": 4,
                "initiative": 17,
                "image": "http://placekitten.com/g/64/64",
                "name": "Zombie qui court",
                "reaction": true,
                "conditions": [
                ],
                },
                {
                "id": 5,
                "active": true,
                "initiative": 16,
                "image": "http://placekitten.com/g/64/64",
                "name": "Jack",
                "reaction": true,
                "conditions": [] 
                },
                {
                "id": 6,
                "initiative": 16,
                "image": "http://placekitten.com/g/64/64",
                "name": "Alphonse",
                "reaction": true,
                "conditions": [
                    {
                        "id": "0",
                        "name": "Poisoned",
                        "isPenalty": true
                    }
                ] 
                },
                {
                "id": 7,
                "initiative": 11,
                "image": "http://placekitten.com/g/64/64",
                "name": "Sigur",
                "reaction": true,
                "conditions": [
                    {
                        "id": "0",
                        "name": "Unconcious",
                        "isPenalty": true
                    },
                    {
                        "id": "1",
                        "name": "Poisoned",
                        "countdown": 2,
                        "isPenalty": true
                    },
                    {
                        "id": "2",
                        "name": "Paralyzed",
                        "countdown": 33,
                        "isPenalty": true
                    },
                    {
                        "id": "3",
                        "name": "Blessed",
                        "isBonus": true
                    },
                ],
                "deathSaving": {
                    "success": 2,
                    "failure": 1
                } 
                },
                {
                "id": 8,
                "initiative": 1,
                "image": "http://placekitten.com/g/64/64",
                "name": "Fargrim",
                "reaction": true,
                "conditions": [
                    {
                        "id": "0",
                        "name": "Poisoned",
                        "isPenalty": true
                    }
                ] 
                }
            ]
        };
    },
    components: {
        PlayerList
    }
};
</script>

<style>

</style>