<template>
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
                <td><Concentration :concentration="player.concentration"/></td>
                <td><DeathSaving :deathSaving="player.deathSaving" /></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Avatar from './Avatar'
import Initiative from './Initiative'
import Name from './Name'
import Reaction from './Reaction'
import ConditionList from './ConditionList'
import Concentration from './Concentration'
import DeathSaving from './DeathSaving'

export default {
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  components: {
    Initiative,
    Avatar,
    Name,
    Reaction,
    ConditionList,
    Concentration,
    DeathSaving
  }
};
</script>