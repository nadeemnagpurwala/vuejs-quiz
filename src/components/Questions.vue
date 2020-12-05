<template>
  <div :key="currentIndex">
    <div class="questions">
      <div class="score-section">
        <div class="left">
          <span><strong>SCORE : {{ score }}</strong></span>
        </div>
        <div class="right">
          <span><div class="shape shape-correct">{{ correct }}</div></span>
          <span><div class="shape shape-incorrect">{{ incorrect }}</div></span>
        </div>
      </div>
      <div v-if="currentQuestion !== undefined">
        <div class="question">
            <span v-html="currentQuestion.question"></span>
        </div>
        <div>
          <button class="btn btn-answer" @click="$emit('check:answer', currentQuestion.correct_answer,'True')">True</button>
          <button class="btn btn-answer" @click="$emit('check:answer', currentQuestion.correct_answer,'False')">False</button>
        </div>
      </div>
      <div v-else>
        <h3>Thanks for the participation !</h3>
        <span>Your total score is {{ score }} / 5</span>
        <br>
        <button class="btn btn-default" @click="reloadPage()">Play Again</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Questions",
    props: {
      currentQuestion: Object,
      currentIndex: Number,
      loading: Boolean,
      score: Number,
      correct: Number,
      incorrect: Number
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

  .btn-answer {
    background-color: #fff;
    border: 2px solid #222;
    color: #222;
  }

  .btn-answer:active {
    background-color: #222;
    border: 2px solid #222;
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

  .score-section {
    padding-bottom: 2rem;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .shape {
    height: 20px;
    width: 50px;
    color: #fff;
    border-radius: 30px;
  }
  .shape-correct {
    float: left;
    background-color: #41b883;
  }

  .shape-incorrect {
    float: right;
    background-color: #dc3545;
  }
</style>