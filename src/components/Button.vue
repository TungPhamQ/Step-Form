<template>
    <div class="form-step__btns">
            <!-- v-if="step < 3" -->
        <div v-if="step < 3"> 
            <button v-on:click.prevent="prevStep()" class="btn prev">Previous</button>
            <button v-on:click.prevent="nextStep()" class="btn next">Next</button><!----><!---->
        </div>
        <!-- button reset + send -->
        <!-- v-if="step == 3" -->
        <div v-if="step == 3">
            <button v-on:click.prevent="resetStep()" class="btn reset" >Reset</button>
            <button class="btn prev">Send</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Button',
    props: [],
    computed: {
        ...mapState(['step', 'name', 'email', 'company', 'employees'])
    },
    methods:{
        nextStep(){
        this.$store.commit('nextStep');
        },
        prevStep(){
            this.$store.commit('prevStep')
        },
        resetStep(){
            this.$store.commit('resetStep')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-step__btns{
    margin-top: 50px;
}
.btn {
    display: inline-block;
    border: unset;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    padding: 8px 24px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
    transition: box-shadow .35s ease-out;
}
.btn:hover {
    box-shadow: 1px 1px 10px rgb(0 0 0 / 40%), 6px 6px 12px rgb(0 0 0 / 20%);
}
.btn.prev {
    background-color: #72e6b1;
}
.btn.next {
    background-color: #1e68cf;
}
.btn+.btn{
    margin-left: 16px;
}
.btn.reset {
    background-color: #1d719a;
}
</style>
