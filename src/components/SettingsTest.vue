<template>
    <v-menu v-if="config.logo" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-avatar size="40px" v-bind="props">
                <v-icon size="40">mdi-cog</v-icon>
            </v-avatar>
        </template>
        <v-expansion-panels>
            <v-expansion-panel title="Color Theme">
                <v-expansion-panel-text>
                    <v-color-picker v-model="config.theme.LoginButton.color" debounce="200"></v-color-picker>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel title="Authorizations">
                <v-expansion-panel-text>
                    <v-checkbox :rules="fileRule" hide-details v-for="method in config.authorization.methods" :key="method.type"
                        v-model="method.enable" :label="method.text">
                    </v-checkbox>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel title="Logo">
                <v-expansion-panel-text>
                    <v-checkbox hide-details v-model="config.logo.isLogo" label="Enable Logo"></v-checkbox>
                    <template v-if="config.logo.isLogo">
                        <v-file-input variant="outlined" hide-details @change="updateLogo"  v-model="logo" accept="image/*"></v-file-input>
                    <v-slider label="Size" v-model="config.logo.logoSize" min="50" max="200" step="1" thumb-label></v-slider>
                    <v-slider label="Margin Top" v-model="config.logo.margin.top" min="0" max="200" step="1" thumb-label></v-slider>
                    <v-slider label="Margin Bottom" v-model="config.logo.margin.bottom" min="0" max="200" step="1" thumb-label></v-slider>
                    </template>
                    
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel title="Top Nav">
                <v-expansion-panel-text class="pa-0">
                    <v-list>
                        <v-list-item v-for="menu in config.top_nav.links" :key="menu.text">
                            <v-list-item-title>
                                <v-text-field variant="outlined" v-model="menu.text" hide-details></v-text-field>
                            </v-list-item-title>
                            <v-list-item-action>
                                <v-text-field variant="outlined" v-model="menu.url" hide-details></v-text-field>
                            </v-list-item-action>
                            <!-- add delete button  on right -->
                            <template v-slot:append="{ isActive }">
                                <v-btn flat size="xs"
                                    @click="config.top_nav.links.splice(config.top_nav.links.indexOf(menu), 1)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </template>

                        </v-list-item>
                        <!-- create a add link -->
                        <v-list-item>
                            <v-list-item-title>
                                <v-btn color="primary" @click="config.top_nav.links.push({ text: 'New Link', url: '' })">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-list-item-title>
                        </v-list-item>

                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-menu>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
const { fetchSettings } = useAppStore()
const { config } = storeToRefs(useAppStore())
const logo = ref(null)
function updateLogo(e: any) {
    const file = e?.target?.files?.[0]
    config.value.logo.logo = URL.createObjectURL(file)
}
fetchSettings()
const fileRule =[
(        value: string | any[]) => {
          return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
        },
      ]
</script>