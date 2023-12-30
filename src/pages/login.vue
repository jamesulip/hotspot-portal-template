<template>
    <v-app id="inspire" style="
      background: url('/bg.png') no-repeat center center fixed !important;
    background-size: cover;
    ">
      <v-app-bar class="px-3" flat density="compact">
        <settings-test></settings-test>
        <v-spacer></v-spacer>
        <v-tabs centered :color="config?.theme?.LoginButton.color">
          <v-tab v-for="link in config?.top_nav?.links" :key="link.text" :text="link.text"></v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
  
      </v-app-bar>
  
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <div>
            <v-img :height="config.logo.logoSize"  :min-width="100"
            v-if="config.logo.isLogo"
            :style="{
              marginTop: config.logo.margin.top + 'px',
              marginBottom: config.logo.margin.bottom + 'px'
            }"
              :src="config.logo.logo"></v-img>
              <!-- create a welcome message -->
             
            <v-card class="mx-auto my-12" max-width="374">
              <template v-slot:loader="{ isActive }">
                <v-progress-linear :active="isActive" :color="config?.theme?.LoginButton.color" height="4" indeterminate></v-progress-linear>
              </template>
  
              <v-card-item>
                <v-tabs v-model="tab" background-color="transparent" :color="config?.theme?.LoginButton.color" grow>
                  <v-tab v-for="n in config.authorization.methods" :key="n.type" v-show="n.enable" :ripple="false" :text="n.text" centered>
                    <v-icon>{{ n.icon }}</v-icon>
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
                <terms-of-service />
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :color="config?.theme?.LoginButton.color" text block>Login</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import { useAppStore } from '../store/app';
  const { config } = storeToRefs(useAppStore())
  
 
  const tab = ref('mdi-home')
  </script>
  
  