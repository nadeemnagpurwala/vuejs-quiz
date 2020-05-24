<template>
	<div class="main-section">
		<Questions @check:answer="checkAnswer" :currentQuestion="currentQuestion"/>
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
    currentQuestion: Object
  },
  methods: {
    checkAnswer: function (answer) {
		this.$emit('check:answer', answer)
    }
  }
}
</script>

<style scoped>
.main-section {
	width: 800px;
	color: #222;
	padding: 20px;
	background-color: #fff;
	border-radius: .5rem;
	margin-top: 2rem;
}
</style>