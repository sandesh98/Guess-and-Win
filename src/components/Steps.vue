<template>
    <div class="container">
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <h1 class="text-center steps-h1-text shadow">Team {{ this.$router.curTeam.name }}</h1>
        <h2 class="text-center steps-h2 shadow">Mag {{ steps }} stappen vooruit</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            steps: 0
        }
    },

    mounted: function() {
        document.body.addEventListener("click", this.nextPage)
    },

    beforeCreate: function() {
        document.body.className = 'steps'
    },

    created() {
        this.result = this.$route.params.result;
        let guessed = this.$router.curTeam.guessed;

        this.steps = Math.max(0, (guessed - this.result));
        this.$router.curTeam.score += this.steps;
        this.$router.curTeam.guessed = 0;
    },

    methods: {
        nextPage() {
            if (this.$router.curTeam.score >= 8) {
                this.$router.push('/final');

                return;
            }

            this.$router.nextTeam();
            this.$router.push('/switch');
        }
    },

    beforeDestroy() {
        document.body.removeEventListener("click", this.nextPage)
    }
}
</script>

<style>
    .steps-h2 {
        color: white;
        font-weight: bold;
        font-size: 3.5em;
        margin-top: 30px;
    }

    .steps-h1-text {
        font-size: 4.5em;
    }
</style>


