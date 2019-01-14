<template>
    <div class="container">
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <h1 class="text-center final-h1-text shadow">🎉 Gefiliciteerd! 🎉</h1>
        <h1 class="text-center final-h1-text shadow">Team {{ this.$router.curTeam.name }} heeft gewonnen</h1>
    </div>
</template>

<script>
export default {
    beforeCreate() {
        document.body.className = 'final'
    }
}
</script>

<style>
    .final-h2 {
        color: white;
        font-weight: bold;
        font-size: 3.5em;
        margin-top: 30px;
    }

    .final-h1-text {
        font-size: 4.5em;
    }
</style>


