<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th />
                    <th>Initiative</th>
                    <th><abbr title="Player">Player</abbr></th>
                    <th>Reaction</th>
                    <th>Conditions</th>
                    <th>Concentration</th>
                    <th>Death saving</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th />
                    <th>Initiative</th>
                    <th><abbr title="Player">Player</abbr></th>
                    <th>Reaction</th>
                    <th>Conditions</th>
                    <th>Concentration</th>
                    <th>Death saving</th>
                </tr>
            </tfoot>
            <tbody>
                <tr v-for="player in players" :key="player.id" v-bind:class="{ 'is-selected': player.active}" >
                    <td><Avatar :url="player.image" /></td>
                    <td><Initiative :initiative="player.initiative" /></td>
                    <td><Name :name="player.name" /></td>
                    <td><Reaction :reaction="player.reaction" /></td>
                    <td><ConditionList :conditions="player.conditions" /></td>
                    <td>
                        <div span v-if="player.concentration">
                            <span class="tag is-info">{{ player.concentration.name }}</span>
                        </div>
                        <div v-else>-</div>
                    </td>
                    <td>
                        <div span v-if="player.deathSaving">
                            <span>
                                {{player.deathSaving.success}}
                                <!-- <font-awesome-icon icon="thumbs-up" /> -->
                            </span>
                            <span>
                                {{player.deathSaving.failure}}
                                <!-- <font-awesome-icon icon="thumbs-down" /> -->
                            </span>
                        </div>
                        <div v-else>-</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Avatar from './Avatar'
import Initiative from './Initiative'
import Name from './Name'
import Reaction from './Reaction'
import ConditionList from './ConditionList'

export default {
  data() {
    return {
      players: [
        {
          "id": 0,
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
          "id": 0,
          "initiative": 19,
          "image": "http://placekitten.com/g/64/64",
          "name": "Liaaaaa",
          "reaction": false,
          "conditions": [
          ] 
        },
        {
          "id": 0,
          "initiative": 18,
          "image": "http://placekitten.com/g/64/64",
          "name": "Gros zombie",
          "reaction": true,
          "conditions": [
          ] 
        },
        {
          "id": 0,
          "initiative": 17,
          "image": "http://placekitten.com/g/64/64",
          "name": "Zombie qui court",
          "reaction": true,
          "conditions": [
          ],
        },
        {
          "id": 0,
          "active": true,
          "initiative": 16,
          "image": "http://placekitten.com/g/64/64",
          "name": "Jack",
          "reaction": true,
          "conditions": [] 
        },
        {
          "id": 0,
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
          "id": 0,
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
                  "id": "0",
                  "name": "Poisoned",
                  "countdown": 2,
                  "isPenalty": true
              },
              {
                  "id": "0",
                  "name": "Paralyzed",
                  "countdown": 33,
                  "isPenalty": true
              },
              {
                  "id": "0",
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
          "id": 0,
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
    Initiative,
    Avatar,
    Name,
    Reaction,
    ConditionList
  }
};
</script>

<style>

</style>