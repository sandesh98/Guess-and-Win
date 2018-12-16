<template>
   <div>
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <div class="container">
            <div class="text-center">
                <h1 class="shadow team-h1-text">Hoeveel teams spelen er?</h1>
                <div class="row">
                    <div class="col-lg-4">
                        <router-link to="/intro" tag="button" class="font-impact">2</router-link>
                    </div>
                    <div class="col-lg-4">
                        <router-link to="/intro" tag="button" class="font-impact">3</router-link>
                    </div>
                    <div class="col-lg-4">
                        <router-link to="/intro" tag="button" class="font-impact">4</router-link>
                    </div>
                </div>
            </div>
        </div>   
    </div> 
</template>

<script>
export default {
    data: function() {
        return {
            team:[]
        }
    },

    beforeCreate: function() {
        document.body.className = 'team';
    },
    methods: {

    }
}
</script>

<style>

    .team-h1-text {
        font-size: 4em;
    }

    .font-impact {
        font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; 
        font-size: 20em;
        color: #FF7329;
        padding: 0px 80px 0px 80px;
    }




</style>


