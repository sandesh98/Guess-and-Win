<template>
    <div class="container">
        <div class="text-center padding-top">
            <h1 class="shadow">Guess and win</h1>
            <router-link to="/team" tag="button">Nieuw spel</router-link>
        </div>
    </div>
</template>

<script>
export default {

    beforeCreate: function() {
        document.body.className = 'home';
    }
    
}
</script>

<style>
    h1 {
        color: white;
        font-size: 7.5em;
        font-weight: bold;
    }

    button {
        margin-top: 70px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.17);
        background-color: white;
        font: black;
        font-size: 5.63em;
    }

    button:focus {
        outline: 0;
    }

    button:active {
        box-shadow: none;
    }


    .padding-top {
         padding-top: 10%;
    }
</style>


