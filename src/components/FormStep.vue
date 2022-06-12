<template>
    <div>
    <section v-if="step == 1 ">
    <div class="form-step__wrap">
        <div  class="form-step__group">
        <div  class="form-control">
            <ValidationProvider v-slot="{ errors }" rules="required">
                <label for="name"> Full Name</label>
                <input type="text" 
                    id="name" 
                    v-model="$store.state.name" 
                    :class="{error :  errors[0] === 'This field is required'}">
                <p class="message">{{ errors[0] }}</p>
            </ValidationProvider>

        </div>
        <div class="form-control">
            <ValidationProvider v-slot="{ errors }" rules="required|email">
                <label  for="email">Your Email</label>
                <input type="email" 
                    id="email" 
                    v-model="$store.state.email"
                    :class="{error : errors[0] == ('This field is required' || 'The field must be email!')}">
                <p class="message">{{ errors[0]}}</p>
            </ValidationProvider>
        </div>
        </div>
    </div>
    </section>
    <section v-if="step == 2 ">
    <div class="form-step__wrap">
        <div  class="form-step__group">
        <div  class="form-control">
            <ValidationProvider v-slot="{ errors }" rules="required">
                <label for="company"> Your Company Name</label>
                <input  
                    type="text" 
                    id="company" 
                    v-model='$store.state.company'
                    :class="{error : errors[0] == 'This field is required'}">
                <p class="message">{{ errors[0]}}</p>
            </ValidationProvider>
        </div>
        <div class="form-control">
            <ValidationProvider v-slot="{ errors }" rules="required">
                <label  for="employees">Number of Employees</label>
                <input type="number" 
                        id="employees" 
                        v-model="$store.state.employees"
                        :class="{error : errors[0] == 'This field is required'}">
                <p class="message">{{ errors[0]}}</p>
            </ValidationProvider>

        </div>
        </div>
    </div>
    </section>
    <section v-if="step == 3 ">
        <div class="form-step__wrap">
        <div  class="form-step__group">
                <div  class="select">
                    <p class="select__label"> From Where did you hear about us </p>
                    <div class="select__wrap">
                        <span class="select__title" 
                            v-on:click="toggleList()"
                            :class="{}">{{selected}}</span>
                        <div  v-show="showList" class="select__options">
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input type="" v-model="selected" v-show="none">
                            <div v-for="(option, index) in options" :key="index" 
                                class="option__item" 
                                @click="select(index)">{{option}}</div>
                            <p class="message">{{ errors[0] }}</p>
                        </ValidationProvider>
                        </div>

                    </div>
                    <p class="select__error">{{err.required}}</p>
                </div>
                <div class="check-term">
                    <ValidationProvider v-slot="{ errors }" rules="required">
                        <input  type="checkbox" id="check-term" v-model="checkTerm">
                        <label  for="check-term" :class="{error : failValidate}">I accept terms &amp; conditions</label>
                        <p  class="check-term__error">{{ errors[0]}}</p>
                    </ValidationProvider>
                </div>
            </div>
        </div>
    </section>    
    </div>    
</template>

<script>
import {mapState} from 'vuex'
import { extend } from 'vee-validate';
import { required, email} from 'vee-validate/dist/rules';
import { ValidationProvider } from 'vee-validate';

// No message specified.
extend('email', {
    ...email,
    message: 'The field must be email!'
});

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
    name: 'FormStep',
    components: {
        ValidationProvider
  },

    data(){
        return{
            none:false,
            showList: false,
            options: ['Friend','Facebook','Website'],
            selected:'--Choose answer--',
            err:{
                required:' The field is required!', 
                email:'The field must be email!', 
            },
            failValidate: true,
            
        }
    },
    computed: {
        ...mapState(['step', 
                    'name',
                    'email',
                    'company',
                    'employees'
                    
        ]),
    },
    methods:{
        toggleList: function(){
            this.showList = !this.showList;
        },
        select: function(index){
            this.selected = this.options[index];
            this.showList = !this.showList;
        }
    },
    }
</script>

<style>
.form-step__wrap {
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
    margin-top: 15px;
    padding: 20px;
}
.form-control {
    text-align: left;
}
.form-control+.form-control {
    margin-top: 12px;
}
.form-control label{
    color: #000;
    font-size: 16px;
    display: block;
    margin-bottom: 6px;
}
.form-control input{
    color: #586068;
    font-size: 16px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: 3px solid transparent;
    transition: all .2s ease;
}
.form-control .message {
    color: #aa4651;
    font-size: 12px;
    margin-top: 8px;
}
/* section 3 */
.select {
    text-align: left;
}
.select__label{
    font-size: 16px;
    color: #000;
    padding-bottom: 10px;
}
.select__wrap {
    border: 1px solid #ccc;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
}
.select__title {
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 12px;
}
.select__error{
    color: #aa4651;
    font-size: 12px;
    margin-top: 8px;
}
.form-step .check-term{
    text-align: left;
    padding-top: 20px;
}
.form-step .check-term__error {
    color: #aa4651;
    font-size: 12px;
    margin-top: 8px;
}
.select__options {
    position: absolute;
    top: calc(100% + 1px);
    background-color: #fff;
    width: 100%;
    padding: 12px 0;
    box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
    border-radius: 12px;
}
.option__item{
    padding: 8px 16px;
    background-color: #fff;
    transition: background-color .2s ease-in;
}
.option__item:hover {
    background-color: #ccc;
}
.form-step .check-term label {
    margin-left: 6px;
}
.form-control input.error {
    box-shadow: 0 0 4px #f4b6c1;
    border: 1px solid #aa4651;
}
.form-control input.error:focus {
    outline: 3px solid #f4b6c1;
}
</style>
