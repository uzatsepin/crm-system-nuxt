<script setup lang="ts">
import {useCommentsByDeal} from "~/components/kanban/slideover/useCommentsByDeal";
import {useCreateComment} from "~/components/kanban/slideover/useCreateComment";
import type {IDeal} from "~/types/deals.types";
import dayjs from "dayjs";

const {data, refetch, isLoading} = useCommentsByDeal();
const {commentRef, writeComment} = useCreateComment({refetch});

const card = data as unknown as IDeal;

</script>

<template>
    <UiInput placeholder="Оставьте комментарий" v-model="commentRef" @keyup.enter="writeComment" />
    <UiButton as="button" class="mt-4" @click="writeComment">Оставить комментарий</UiButton>
    <UiSkeleton v-if="isLoading" class="w-full h-[76px] rounded mt-5"/>
    <div v-else-if="card">
        <div v-for="comment in card?.comments" :key="comment.$id" class="flex items-start mt-5">
            <Icon name="radix-icons:chat-bubble" class="mr-3 mt-1" size="25"/>
            <div class="border-border bg-black/20 rounded p-3 w-full">
                Комментарий {{ dayjs(comment.$createdAt).format('HH:mm') }}
                <p>{{ comment.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>