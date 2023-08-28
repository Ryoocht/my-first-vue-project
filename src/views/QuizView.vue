<script setup lang="ts">
import { q } from '@/data/quizes'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import QuizHeader from '@/components/QuizHeader.vue'
import QuestionCard from '@/components/QuestionCard.vue'

const route = useRoute()
const quizId = parseInt(route.params.id as string)
const quiz = q.find((q) => q.id === quizId)
const currentQuestionIndex = ref(1)
const numberOfCorrectAnswers = ref(0)

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quiz?.questions.length}`
})

const barPercentage = computed(() => {
  return (currentQuestionIndex.value / (quiz?.questions.length ?? 0)) * 100
})

const resultStatus = computed(() => {
  return `${numberOfCorrectAnswers.value}/${quiz?.questions.length}`
})

const onOptionSelected = (isCorrect: boolean) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++
  }
  if (currentQuestionIndex.value < (quiz?.questions.length ?? 0)) {
    currentQuestionIndex.value++
  }
}
</script>

<template>
  <div class="container">
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <div>
      <QuestionCard
        :question="quiz?.questions[currentQuestionIndex - 1]"
        @selectOption="onOptionSelected"
      />
    </div>
    <button
      v-if="currentQuestionIndex < (quiz?.questions.length ?? 0)"
      @click="currentQuestionIndex++"
    >
      Next Question
    </button>
    <div v-else class="result">
      <p>Your result ...</p>
      <p class="result-text">{{ resultStatus }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
.result {
  text-align: center;
}
.result-text {
  margin: 0;
  font-size: xx-large;
}
</style>
