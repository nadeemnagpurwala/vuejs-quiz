<template>
  <div class="questions">
    <h4>SCORE : {{ score }}</h4>
    <div class="question">
      Vuejs is cool !
    </div>
    <div>
      <button class="btn btn-true" @click="$emit('check:answer', 'true')">True</button>
      <button class="btn btn-false" @click="$emit('check:answer', 'false')">False</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"Questions",
    data: function() {
        return {
          score: 0
        }
    }
}
</script>

<style scoped>
  .question {
    margin-top: 3rem;
    font-size: 32px;
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
</style>