<script lang="ts" setup>
    console.log("sanchir")
</script>
<template>
<section>
    <main>
      <ClientOnly>
        <slot/>
      </ClientOnly>
    </main>
</section>
</template>
