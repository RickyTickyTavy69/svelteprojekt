<script lang="ts">
    let seconds = 0;
    setInterval(() => {
        seconds++
    }, 1000)
    let d = "секунд";
    let a = "секунда";
    let y = "секунды";
    let numbersdd = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    let numbersa = ["1"];
    let numbersd = ["0", "5", "6", "7" , "8", "9"];
    let numbersy = ["2", "3", "4"];
</script>

<section>
    {seconds}

    {(seconds.toString().length < 2 && numbersa.includes(seconds.toString())) ? a : ""}
    {(seconds.toString().length < 2 && numbersd.includes(seconds.toString())) ? d : ""}
    {(seconds.toString().length < 2 && numbersy.includes(seconds.toString())) ? y : ""}
    {numbersdd.includes(seconds.toString()) ? d : ""}
    {(seconds.toString().length >= 2 && !numbersdd.includes(seconds.toString()) && numbersy.includes(seconds.toString().at(-1))) ? y : ""}
    {(seconds.toString().length >= 2 && !numbersdd.includes(seconds.toString()) && numbersd.includes(seconds.toString().at(-1))) ? d : ""}
    {(seconds.toString().length >= 2 && !numbersdd.includes(seconds.toString()) && numbersa.includes(seconds.toString().at(-1))) ? a : ""}
</section>

<style>
    section{
        font-size: 1.2em;
        font-weight: bold;
    }
</style>