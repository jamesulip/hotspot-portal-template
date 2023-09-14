<template>
  <v-app id="inspire" style="
    background: url('/bg.png') no-repeat center center fixed !important;
  background-size: cover;
  ">
    <v-app-bar class="px-3" flat density="compact">
      <v-spacer></v-spacer>
      <v-tabs centered color="grey-darken-2">
        <v-tab v-for="link in [
          'Menu 1',
          'Sides',
          'Drinks',
          'Desserts',
        ]" :key="link" :text="link"></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <div>
          <v-img height="100"
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-ipage-v1-0-2%2F752%2F533752%2FhworyvZU%2Fcf2734b18d274adc8db306d45ac55a97&methods=resize%2C500%2C5000"></v-img>
          <v-card class="mx-auto my-12" max-width="374">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
            </template>

            <v-card-item>
              <v-tabs v-model="tab" background-color="transparent" color="deep-purple" grow>
                <v-tab v-for="n in [
                  {
                    icon: 'mdi-home',
                    text: 'Free',
                    value: 'free',
                  },
                  {
                    icon: 'mdi-account',
                    text: 'Login',
                    value: 'login',
                  },
                  {
                    icon: 'mdi-ticket-percent',
                    text: 'Voucher',
                    value: 'voucher',
                  },
                  {
                    icon: 'mdi-qrcode',
                    text: 'QR',
                    value: 'qr',
                  }
                ]" :key="n.icon" :ripple="false" :text="n.text" centered>
                  <v-icon start v-if="!!n.icon && n.icon !== 'mdi-home'">
                    {{ n.icon }}
                  </v-icon>
                  {{ n.text }}
                </v-tab>
              </v-tabs>

            </v-card-item>

            <v-window v-model="tab" an>
              <v-window-item :key="'free'">
                <AuthFree />
              </v-window-item>
              <v-window-item :key="'login'">
                <AuthCredentials />
              </v-window-item>
              <v-window-item :key="'voucher'">
                <AuthVoucher />
              </v-window-item>
              <v-window-item :key="'qr'">
                <AuthQr />
              </v-window-item>
            </v-window>

            <v-card-text>
             <terms-of-service/>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text block >Login</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',
])
const tab = ref('mdi-home')
</script>

