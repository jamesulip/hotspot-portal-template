<template>
    <v-card>
        <v-card-text>
            <v-text-field hide-details variant="outlined" v-model="login" :rules="loginRules" label="Login" required></v-text-field>
        </v-card-text>
        <v-card-text>
            <v-text-field hide-details variant="outlined" v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">
</script>
<style scoped></style>