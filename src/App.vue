<template>
  <div id="app">
    <div class="form-step">
      <progress-bar></progress-bar>
      <form class="form">
        <step-title></step-title>
        <form-step></form-step> 
        <Button></Button>
        
      </form>
    </div>
  </div>
</template>

<script>

import ProgressBar from './components/ProgressBar.vue'
import StepTitle from './components/StepTitle.vue'
import FormStep from './components/FormStep.vue'
import Button from './components/Button.vue'
// import { ValidationProvider } from 'vee-validate';


export default {
  name: 'App',
  // storeData,
  components: {
    ProgressBar,
    StepTitle,
    FormStep,
    Button,
    // ValidationProvider
  },
  data() {
    return {
    }  
},
}  
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Poppins,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.form-step{
    width: 900px;
    margin: 0 auto;
}
body{
  background-color: #F4F6FB;
  padding: 0;
  margin: 0;
}
</style>
