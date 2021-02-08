<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <GridLayout v-if="!isLoading" rows="*, *" verticalAlignment="middle">
        <Image
          row="0"
          src="~/assets/images/logo.png"
          width="125"
        />

        <StackLayout row="1" padding="20">
          <StackLayout>
            <Label text="Registration" class="h1 text-center police-harabara" />
            <Label
              text="Enter Your Mobile Number  To Receive A Verification Code"
              class="text-center"
              textWrap="true"
            />
          </StackLayout>

          <GridLayout columns="100, *" padding="2" class="m-10 input-border">
            <Button
              col="0"
              width="100%"
              @tap="onTapChooseCountry"
              :text="country.flag + ' ' + country.dial_code"
            />

            <TextField
              col="1"
              hint="844752450"
              :isEnabled="!processing"
              class="--border"
              keyboardType="phone"
              autocorrect="false"
              height="40"
              autocapitalizationType="none"
            />
          </GridLayout>

          <Button
            class="btn-degrade"
            width="100%"
            height="50"
            borderRadius="25"
            color="#ffffff"
            text="Get the activation code"
            @tap="onTapSendPhoneNumber"
          />
        </StackLayout>
      </GridLayout>

      <StackLayout v-else verticalAlignment="middle">
        <ActivityIndicator
          busy="true"
          busyChange="onBusyChanged"
          width="50"
          height="50"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";
import ListCountries from "~/components/modals/ListCountries.vue";
import Countries from "./../assets/ressources/countries";
import Login2Page from "./Login2.vue";

export default Vue.extend({

  data() {
    return {
        isLoading: false,
        country: {}
    };
  },

  mounted() {
    this.country = Countries[50];
  },

  methods: {
    onTapChooseCountry() {
      this.$showModal(ListCountries, {
        props: {},
        fullscreen: true,
        animated: true,
        stretched: false,
      }).then((country) => {
        this.country = country;
      });
    },

    onTapSendPhoneNumber() {
        this.$navigateTo(Login2Page, {
            transition: {
                name: 'flip',
                duration: 300,
                curve: 'linear'
            }
        });
    }
  },
});
</script>

<style scoped>
Page {
  background-image: url("~/assets/images/bg_1.jpg");
  background-repeat: no-repeat;
  opacity: 0.2;
}

Button {
  font-size: 20;
}
</style>


