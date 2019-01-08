<template>
    <div class="container">
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <h2 class="subtitle">
            Jullie hebben gekozen om met {{ this.$router.teamSize }} teams te spelen. <br>
            Pak de volgende kleuren pionnen:
        </h2>
        <div class="row">
            <div class="col-lg-3">
                <div class="card yellow card-shadow"></div>
            </div>
            <div class="col-lg-3">
                <div class="card green card-shadow"></div>
            </div>
            <div class="col-lg-3" v-if="this.$router.teamSize > 2">
                <div class="card blue card-shadow"></div>
            </div>
            <div class="col-lg-3" v-if="this.$router.teamSize > 3">
                <div class="card red card-shadow"></div>
            </div>
        </div>
        <h2 class="footer-text">Klik op het scherm om verder te gaan.</h2>
    </div>
</template>

<script>
export default{
    mounted: function() {
        document.body.addEventListener("click", this.switchPage)
    },

    beforeCreate: function() {
        document.body.className = 'intro'
    },

    methods: {
        switchPage() {
            this.$router.push('switch')
        }
    },

    beforeDestroy() {
        document.body.removeEventListener("click", this.switchPage)
    }
}
</script>

<style>
    .subtitle {
        color: white;
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 50px;
    }

    .footer-text {
        color: white;
        margin-top: 40px;
    }

    .blue {
        background-color: #4BA5FF;
    }

    .card-shadow {
        box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.17);
    }

    .red {
        background-color: #DE2F2F;
    }

    .green {
        background-color: #5CBF3F;
    }

    .yellow {
        background-color: #FFDC1D;
    }

    .card {
        height: 400px;
    }
</style>


