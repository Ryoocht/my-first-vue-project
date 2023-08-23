<script setup lang="ts">
import type { Subject } from '@/data/quizes'
import { useRouter } from 'vue-router'

const props = defineProps<{
  quiz: Subject
}>()
const router = useRouter()

const navigateToQuiz = () => {
  router.push(`/quizes/${props.quiz.id}`)
}
</script>

<template>
  <div @click="navigateToQuiz" class="card">
    <img :src="props.quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ props.quiz.name }}</h2>
      <p>{{ props.quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
