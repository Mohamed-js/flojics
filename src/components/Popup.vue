<script setup>
import { usePopupStore } from '@/stores/popup'
const popup = usePopupStore()
function handlePopupClick() {
    popup.close()
}
</script>
<template>
    <div @click.self="handlePopupClick"
        class="fixed top-0 left-0 right-0 bottom-0 bg-gray-400/50 flex items-center justify-center p-4">
        <slot />
    </div>
</template>