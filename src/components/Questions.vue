<template>
  <div>
    <div class="questions" v-if="currentQuestion !== undefined">
      <h4>SCORE : {{ score }}</h4>
      <div class="question">
          <span v-html="currentQuestion.question"></span>
      </div>
      <div>
        <button class="btn btn-true" @click="$emit('check:answer', currentQuestion.correct_answer,'True')">True</button>
        <button class="btn btn-false" @click="$emit('check:answer', currentQuestion.correct_answer,'False')">False</button>
      </div>
    </div>
    <div v-else>
      <h3>Thanks for the participation !</h3>
      <span>Your total score is {{ score }} / 5</span>
      <br>
      <button class="btn btn-default" @click="reloadPage()">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"Questions",
    props: {
      currentQuestion: Object,
      loading: Boolean,
      score: Number
    },
    methods: {
      reloadPage: function () {
        location.reload()
      }
    }
}
</script>

<style scoped>
  .question {
    margin-top: 3rem;
    font-size: 25px;
  }

  .btn {
    cursor: pointer;
    background-color: #222;
    color: #fff;
    border: 2px solid #222;
    display: inline-block;
    padding: .8rem 3rem;
    border-radius: 4px;
    margin: 3rem;
  }

  .btn-true {
    background-color: #fff;
    border: 2px solid #41b883;
    color: #41b883;
  }

  .btn-true:hover {
    background-color: #41b883;
    border: 2px solid #41b883;
    color: #fff;
  }

  .btn-false {
    background-color: #fff;
    border: 2px solid #dc3545;
    color: #dc3545;
  }

  .btn-false:hover {
    background-color: #dc3545;
    border: 2px solid #dc3545;
    color: #fff;
  }

  .btn-default {
    background-color: #fff;
    border: 2px solid #222;
    color: #222;
  }

  .btn-default:hover {
    background-color: #222;
    border: 2px solid #222;
    color: #fff;
  }
</style>