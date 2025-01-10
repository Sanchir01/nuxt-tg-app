<script setup lang="ts">

const { MainButton,useWebAppPopup } = await import("vue-tg")


const { showAlert } = useWebAppPopup()

</script>


<template>
  <MainButton text="Главная кнопка" color="rgba(233,130,120,0.2)"  @click="() => showAlert('Hello!')" />
  sadasd
</template>
