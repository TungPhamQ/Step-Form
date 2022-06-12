<template>
    <div class="progress">
        <div class="progress-border ">
            <div class="progress-content" :style="{width: barWidth+ '%'}"></div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    name: 'ProgressBar',

    computed:{
        ...mapState(['step']),
        ...mapGetters(['step']),

        barWidth() {
            return Math.round((this.$store.state.step / 3) *100)
        },

    data(){
        return{
            barWidth: "34%",
        }
    }
}   
}    

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-border{
    width: 100%;
    height: 18px;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
}
.progress-content{
    height: 100%;
    background-color: #437fe8;
    border-radius: 12px;
    transition: width .5s ease !important;
}

</style>
