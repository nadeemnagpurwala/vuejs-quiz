<template>
	<div :key="currentIndex">
		<div class="main-section">
			<div>
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
					<button class="btn btn-true" @click="$emit('check:answer', currentQuestion.correct_answer,'True')">True</button>
					<button class="btn btn-false" @click="$emit('check:answer', currentQuestion.correct_answer,'False')">False</button>
				</div>
				<div v-else>
					<h3>Thanks for the participation !</h3>
					<span>Your total score is {{ score }} / 5</span>
					<br>
					<button class="btn btn-default" @click="reloadPage()">Play Again</button>
					<button class="btn btn-default">
						<router-link to="/">Go To Homepage</router-link>
					</button>
				</div>
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
.main-section {
  width: auto;
  color: #222;
  padding: 20px;
  background-color: #fff;
  border-radius: .5rem;
  margin-top: 5rem;
}

.question {
    margin-top: 3rem;
    font-size: 25px;
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