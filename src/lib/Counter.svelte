<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="button" on:click={increment}>
  ПОН
</button>

<style>
  .button{
    border: 3px solid blue;
  }

  .button:hover{
    border: 3px solid #0b6e0b;
  }
</style>