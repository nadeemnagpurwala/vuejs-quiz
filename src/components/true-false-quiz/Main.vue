<template>
  <div id="truefalse-home" :style="{ backgroundColor: bgcolor}">
    <div :class="{ 'loader': loading }"></div>
	<Questions v-if="!loading" 
	@check:answer="checkAnswer" 
	:currentQuestion="questions[index]" 
	:score="score" :currentIndex="index" 
	:correct="correct" 
	:incorrect="incorrect"
	/>
  </div>
</template>

<script>
import Questions from '@/components/true-false-quiz/Questions.vue'

export default {
	name: 'Main',
	components: {
		Questions
	},
	data: function() {
		return {
			bgcolor: '#ecf0f1',
			textcolor: '#222',
			loading: false,
			questions:[],
			index: 0,
			score: 0,
			correct: 0,
			incorrect: 0
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
			}
			catch (error) {
				console.error(error)
			}
		},
		checkAnswer: function (correctAnswer, selectedAnswer) {
			if (correctAnswer === selectedAnswer) {
			//this.bgcolor = '#41b883'
			//this.textcolor = '#fff'
			this.score++
			this.correct++
			}
			else {
				//this.bgcolor = '#dc3545'
				//this.textcolor = '#fff'
				this.incorrect++
			}
			this.index++
		}
	}
}
</script>

<style scoped>
</style>