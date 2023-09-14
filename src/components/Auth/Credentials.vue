<template>
    <!-- create input login -->
    <v-form>
        <v-card-text>
            <v-text-field variant="outlined" v-model="login" :rules="loginRules" label="Login" required></v-text-field>
        </v-card-text>
        <v-card-text>
            <v-text-field variant="outlined" v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="submit">Login</v-btn>
        </v-card-actions>
    </v-form>
</template>

<script setup lang="ts">

</script>

<style scoped></style>