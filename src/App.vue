<template>
  <div id="app" :style="{ backgroundColor: bgcolor}">
    <div :class="{ 'loader': loading }"></div>
    <h2 :style="{ color: textcolor}" class="title">{{ title }}</h2>
    <Homepage v-if="!loading" @check:answer="checkAnswer" :currentQuestion="questions[index]" :score="score" />
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
        title: 'Loading.Please Wait ...',
        bgcolor: '#ecf0f1',
        textcolor: '#222',
        loading: false,
        questions:[],
        index: 0,
        score: 0
    }
  },
  mounted() {
    this.getQuestions()
  },
  methods: {
    async getQuestions() {
      this.loading = true
      try {
          const response = await fetch(
            'https://opentdb.com/api.php?amount=5&type=boolean'
          )
          const data = await response.json()
          this.questions = data.results
          this.loading = false
          this.title = "Welcome To Vuejs Quiz Application"
        }
      catch (error) {
        console.error(error)
      }
    },
    checkAnswer: function (correctAnswer, selectedAnswer) {
      if (correctAnswer === selectedAnswer) {
        this.bgcolor = '#41b883'
        this.textcolor = '#fff'
        this.score++
      }
      else {
        this.bgcolor = '#dc3545'
        this.textcolor = '#fff'
      }
      this.index++
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
  /*justify-content: center;*/
  align-items: center;
  flex-direction: column;
}

.loader{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url('../public/loader.gif') 50% 50% no-repeat rgb(249,249,249);
  background-size: 50px;
  opacity: 0.5;
}

.title {
  margin-top: 3rem;
}
</style>
