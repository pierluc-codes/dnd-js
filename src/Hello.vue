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
                <tr>
                    <td><img src="http://lorempixel.com/64/64/cats/6" /></td>
                    <td>20</td>
                    <td>Anomen</td>
                    <td><a class="button is-success">Available</a></td>
                    <td><a class="button is-info">Divine shield</a></td>
                    <td><a class="button is-info">Faith armor</a></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td><img src="http://lorempixel.com/64/64/cats/5" /></td>
                    <td>19</td>
                    <td>Lia</td>
                    <td><a class="button is-success">Available</a></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td><img src="http://lorempixel.com/64/64/cats/8" /></td>
                    <td>17</td>
                    <td>Gros zombie</td>
                    <td><a class="button is-success">Available</a></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td><img src="http://lorempixel.com/64/64/cats/7" /></td>
                    <td>17</td>
                    <td>Zombie qui court</td>
                    <td><a class="button is-success">Available</a></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr class="is-selected">
                    <td><img src="http://lorempixel.com/64/64/cats/4" /></td>
                    <td>17</td>
                    <td>Jack</td>
                    <td><a class="button is-success">Available</a></td>
                    <td><a class="button is-danger">Poisoned</a></td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td><img src="http://lorempixel.com/64/64/cats/3" /></td>
                    <td>16</td>
                    <td>Alphonse</td>
                    <td><a class="button is-success">Available</a></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td><img src="http://lorempixel.com/64/64/cats/2" /></td>
                    <td>11</td>
                    <td>Sigur</td>
                    <td><a class="button is-danger">Unavailable</a></td>
                    <td>
                        <a class="button is-danger">Unconcious</a>
                        <a class="button is-danger">Poisoned (2)</a>
                        <a class="button is-danger">Paralyzed (10)</a>
                        <a class="button is-info">Blessed</a>
                    </td>
                    <td>-</td>
                    <td>2/1</td>
                </tr>
                <tr>
                    <td><img src="http://lorempixel.com/64/64/cats/1" /></td>
                    <td>1</td>
                    <td>Fargrim</td>
                    <td><a class="button is-success">Available</a></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      a: "bobby"
    };
  }
};
</script>

<style>

</style>