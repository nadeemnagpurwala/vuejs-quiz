<template>
    <div class="home">
		<br>
        <h3>Select A Quiz Type To Proceed : </h3>
        <div class="buttons">
            <button class="btn btn-success">
				<router-link to="/true-false-quiz">True / False Questions</router-link>
            </button>
            <button class="btn btn-success">
				<router-link to="/multiple-choice-quiz">Multiple Choice Questions</router-link>
			</button>
            <button class="btn btn-success">
				<router-link to="/random-quiz">Random Questions</router-link>
			</button>
        </div>
    </div>
</template>

<style>
</style>