import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        step: 1,
                
        name:'',
        email:'',
        company:'',
        employees:'',
    },
    getter:{
        step: state => state.step,
    },
    mutations: {
        nextStep (state) {
            if(state.step == 1){
                if(state.name == '' || state.email == ''){
                    state.step = 1;
                }
                else state.step++
            }
            if(state.step == 2){
                if(state.company == '' || state.employees ==''){
                    state.step = 2
                }
                else state.step++
            }
        },
        prevStep (state) {
            if(state.step > 1) {state.step--}
        },
        resetStep (state) {
            state.step = 1;
        },
    },
    
})

export default store;