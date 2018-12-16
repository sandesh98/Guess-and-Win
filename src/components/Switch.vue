<template>
    <div class="container">
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <h1 class="text-center switch-h1-text shadow">Team 2 groen is aan de beurt...</h1>
        <h2 class="text-center footer-text">Klik op het scherm om verder te gaan.</h2>
    </div>
</template>

<script>
export default {
    mounted: function() {
        document.body.addEventListener("click", this.introPage)
    },

    beforeCreate: function() {
        document.body.className = 'switch'
    },

    methods: {
        introPage() {
            this.$router.push('turn')
        }
    }
}
</script>

<style>
    .turn {
        font-size: 4em;
    }

    .switch-h1-text {
        font-size: 3.5em;
    }

    .footer-text {
        position: relative;
        margin-top: 80px;
        font-size: 2.5em;
    }
</style>


