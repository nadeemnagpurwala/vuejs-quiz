<template>
	<div class="main-section">
		<Questions @check:answer="checkAnswer" :currentQuestion="currentQuestion" :score="score"/>
	</div>
</template>

<script>
import Questions from './Questions.vue'

export default {
  name: 'Homepage',
  components: {
    Questions
  },
  props: {
    currentQuestion: Object,
    score: Number
  },
  methods: {
    checkAnswer: function (correctAnswer, selectedAnswer) {
		this.$emit('check:answer', correctAnswer, selectedAnswer)
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
	margin-top: 2rem;
}
</style>