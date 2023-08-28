<script setup lang="ts">
import { q } from '@/data/quizes'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import QuizHeader from '@/components/QuizHeader.vue'
import QuestionCard from '@/components/QuestionCard.vue'

const route = useRoute()
const quizId = parseInt(route.params.id as string)
const quiz = q.find((q) => q.id === quizId)
const currentQuestionIndex = ref(0)

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value + 1}/${quiz?.questions.length}`
})
</script>

<template>
  <div class="container">
    <QuizHeader :questionStatus="questionStatus" />
    <div>
      <QuestionCard :question="quiz?.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
