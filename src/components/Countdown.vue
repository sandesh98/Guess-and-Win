<template>
    <div class="container">
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <h1 class="text-center countdown-h1-text shadow">Draai het scherm terug</h1>
        <h2 class="text-center countdown-h2 shadow">Klik om verder te gaan.</h2>
    </div>
</template>

<script>
export default {
    mounted: function() {
        document.body.addEventListener("click", this.dicePage)
    },

    beforeCreate: function() {
        document.body.className = 'countdown'
    },

    methods: {
        dicePage() {
            document.body.removeEventListener("click", this.dicePage)
            this.$router.push('dice');
        }
    }
}
</script>

<style>
    .countdown-h2 {
        color: white;
        font-weight: bold;
        font-size: 3.5em;
        margin-top: 30px;
    }

    .countdown-h1-text {
        font-size: 4.5em;
    }

    .turn {
        font-size: 4em;
    }

    .footer-text {
        position: relative;
        margin-top: 80px;
        font-size: 2.5em;
    }
</style>


