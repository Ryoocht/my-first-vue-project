<script setup lang="ts">
import type { Question } from '@/data/quizes'

const { question } = defineProps<{
  question?: Question
}>()

const emit = defineEmits<{
  selectOption: [isCorrect: boolean]
}>()
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question?.text }}</h1>
  </div>
  <div class="options-container">
    <div
      v-for="option in question?.options"
      :key="option.id"
      class="option"
      @click="emit('selectOption', option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background-color: bisque;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.option-value {
  background-color: rgb(244, 239, 239);
  width: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: start;
}

.option-value p {
  margin: 0;
  padding: 0 20px;
}
</style>
