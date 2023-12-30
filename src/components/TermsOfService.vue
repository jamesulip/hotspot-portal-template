<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
      >
        <template v-slot:activator="{ props }">
            <v-checkbox hide-details density="compact" v-model="checkbox">
                <template v-slot:label>
                  I agree to the <a @click="dialog=true" href="#">Terms of Service</a>
                </template>
              </v-checkbox>
        </template>
  
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn :color="config?.theme?.LoginButton.color" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          dialog: false,
          checkbox: false,
        }
      },
    }
  </script>