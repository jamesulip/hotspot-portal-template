<template>
    <!-- create input login -->
        <v-card-text>
            <v-text-field hide-details variant="outlined" v-model="login"  label="Login" required></v-text-field>
        </v-card-text>
        <v-card-text>
            <v-text-field hide-details variant="outlined" v-model="password"  label="Password" required></v-text-field>
        </v-card-text>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const login = ref('')
const password = ref('')
</script>

<style scoped></style>