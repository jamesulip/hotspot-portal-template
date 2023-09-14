<template>
        <v-card-text>
            <v-text-field hide-details variant="outlined" v-model="password" prepend-inner-icon="mdi-ticket-percent"  label="Voucher" required></v-text-field>
        </v-card-text>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const password = ref('')
</script>

<style scoped></style>