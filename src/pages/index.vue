<script setup lang="ts">

const { MainButton,useWebAppPopup } = await import("vue-tg")

const { showAlert } = useWebAppPopup()
  useTgWebAppStore().init()
</script>


<template>
  <MainButton text="Главная кнопка" color="rgba(233,130,120,0.2)"  @click="() => showAlert('Hello!')" />
  <div class="text-red-200">sadsadasdasd</div>
  <button onclick="() => console.log(webApp)">нажми на меня</button>
</template>
