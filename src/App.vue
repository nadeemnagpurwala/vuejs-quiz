<template>
  <div id="app" :style="{ backgroundColor: color}">
    <Homepage @check:answer="checkAnswer"/>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  },
  data: function() {
    return {
        color: '#ecf0f1'
    }
  },
  methods: {
    checkAnswer: function (answer) {
      if (answer === 'true') {
        this.color = '#41b883'
      }
      else {
        this.color = '#dc3545'
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Nanum Gothic', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
