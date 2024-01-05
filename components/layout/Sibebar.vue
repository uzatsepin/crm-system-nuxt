<script lang="ts" setup></script>

<template>
    <aside class="px-5 py-8 bg-slate-800 h-full relative w-full">
        <NuxtLink to="/" class="mb-10 block">
            <NuxtImg src="./logo.svg" width="140px" alt="logo" class="mx-auto" />
        </NuxtLink>

        <button class="absolute top-2 right-3 transition-colors hover:text-primary">
            <Icon name="line-md:log-out" size="20" class="bg-white-100" />
        </button>
        <LayoutMenu />
    </aside>
</template>

<script scoped>

</script>