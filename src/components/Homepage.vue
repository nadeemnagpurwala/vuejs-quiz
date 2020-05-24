<template>
	<div class="main-section">
		<Questions @check:answer="checkAnswer" />
	</div>
</template>

<script>
import Questions from './Questions.vue'

export default {
  name: 'Homepage',
  components: {
    Questions
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
	color: #222;
	padding: 20px;
	background-color: #fff;
	border-radius: .5rem;
}
</style>