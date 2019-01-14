<template>
    <div class="container text-center">
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <h1 class="dice-h1-text shadow">Rol de dobbelsteen</h1>

        <p id="placeholder">
            {{ result }}
        </p>
        <button id="button" :disabled="disabled" @click="rollDice" class="dice-button">Rollen</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: 0,
            disabled: false
        }
    },

    beforeCreate: function() {
        document.body.className = 'dice';
    },

    methods: {
        rollDice() {
            this.disabled = true;

            let dice = {
                sides: 3,
                roll: function () {
                    var randomNumber = Math.floor(Math.random() * this.sides);
                    return randomNumber;
                }
            }

            this.result = dice.roll();
            setTimeout(() => {
                this.stepsPage();
            }, 1000);
        },

        stepsPage() {
            this.$router.push({name: 'steps', params: { result: this.result}});
        }
    }
}
</script>

<style>
    .dice-h1-text {
        font-size: 4.5em;
    }

    .turn {
        font-size: 4em;
    }
    .dice-button {
        background-color: rgb(82, 186, 179);
        border-radius: 6px;
        border: none;
        color: rgb(255, 255, 255);
        padding: 10px;
        width: 200px;
        cursor: pointer;
        font-size: 1.5em;
    }

    #placeholder {
        height: 120px;
        width: 120px;
        padding: 20px;
        margin: 50px auto;
        border: 1px solid black;
        border-radius: 10px;  
        font-size:5em;
    }
</style>


