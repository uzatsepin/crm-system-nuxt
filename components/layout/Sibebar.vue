<script lang="ts" setup>

import {useAuthStore, useIsLoadingStore} from "~/store/auth.store";
import {account} from "~/utils/appwrite";

const authStore = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const router = useRouter();

async function logout() {
    isLoadingStore.set(true);
    await account.deleteSession('current');
    authStore.clear();
    await router.push('/login')
    isLoadingStore.set(false);


}

</script>

<template>
    <aside class="px-5 py-8 bg-slate-800 h-full relative w-full">
        <NuxtLink to="/" class="mb-10 block">
            <NuxtImg src="./logo.svg" width="100px" alt="logo" class="mx-auto" />
        </NuxtLink>

        <button class="absolute top-2 right-3 transition-colors hover:text-primary">
            <Icon name="line-md:log-out" size="20" class="bg-white-100" @click="logout"/>
        </button>
        <LayoutMenu />
    </aside>
</template>

<script scoped>

</script>