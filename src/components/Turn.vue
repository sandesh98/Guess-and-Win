<template>
    <div class="container">
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <h1 class="text-center turn-h1-text shadow">Draai het scherm naar je toe</h1>
        <h2 class="text-center turn-h2 shadow">Klik om verder te gaan.</h2>
    </div>
</template>

<script>
export default {
    beforeCreate: function() {
        document.body.className = 'turnpage'
    }
}
</script>

<style>
    .turn-h2 {
        color: white;
        font-weight: bold;
        font-size: 3.5em;
        margin-top: 30px;
    }

    .turn-h1-text {
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


