<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Time from "./lib/Time.svelte";
  import ayanami from "./assets/Rei.webp"
</script>

<main>
  <img class="image" src={ayanami} alt="I rei Ayanami">
  <h2> Optische Täuschung:</h2>
  <div class="card">
    du denkst das ist Ayanami Rei
    <br/>
    Aber eigentlich verschwendest du deine Zeit, indem du dir nutzlose Dinge im Internet ansiehst
    <br/>
    <p>
      Das schon seit... <br/> <br/><Time/>
    </p>
    <br/>
    <br/>
    <Counter />
  </div>
</main>

<style>
  main {
    background-color: #c4c4e2;
  }
  .image {
    width: 500px;
  }

</style>
