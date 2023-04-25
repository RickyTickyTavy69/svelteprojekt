<script lang="ts">
    let seconds = 0;
    setInterval(() => {
        seconds++
    }, 1000)
</script>

<section>
    {seconds}
</section>

<style>
    section{
        font-size: 1.2em;
        font-weight: bold;
    }
</style>