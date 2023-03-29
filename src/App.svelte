<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Time from "./lib/Time.svelte";
  import ayanami from "./assets/Rei.webp"
</script>

<main>
  <img src={ayanami} alt="I rei Ayanami">
  <div class="card">
    Ты тратишь своё время, изучая ненужные ненужные технологии...
    <br/>
    <br/>
    <p>
      Уже прошло <br/> <br/><Time/>
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

</style>
