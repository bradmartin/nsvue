<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <GridLayout v-if="!isLoading" rows="*, *" verticalAlignment="middle">
        <Image
          row="0"
          class="logo"
          src="~/assets/images/logo.png"
          width="135"
        />

        <StackLayout row="1" padding="20">
          <StackLayout>
            <Label text="Registration" class="h1 text-center police-harabara" />
            <Label
              text="Enter Your Activation Code"
              class="text-center"
              textWrap="true"
            />
          </StackLayout>


          <GridLayout columns="*, *, *, *, *" paddingLeft="5" paddingRight="5" height="60">
            
            <TextField col="0" hint="0" maxLength="1" keyboardType="phone" autocorrect="false"  />
            <TextField col="1" hint="0" maxLength="1" keyboardType="phone" autocorrect="false" />
            <TextField col="2" hint="0" maxLength="1" keyboardType="phone" autocorrect="false" />
            <TextField col="3" hint="0" maxLength="1" keyboardType="phone" autocorrect="false" />
            <TextField col="4" hint="0" maxLength="1" keyboardType="phone" autocorrect="false" />

          </GridLayout>

          

          <Button
            class="btn-degrade"
            width="100%"
            height="50"
            borderRadius="25"
            color="#ffffff"
            text="Send Your activation code"
            @tap="onTapSendActivationCode"
          />

        </StackLayout>
      </GridLayout>

      <StackLayout v-else verticalAlignment="middle">
        <ActivityIndicator
          busy="true"
          @busyChange="onBusyChanged"
          width="50"
          height="50"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";
import Utils from '~/shared/utils';

export default Vue.extend({

  data() {
    return {
      isLoading: false,
    };
  },

  mounted() {
    
  },

  methods: {
    onTapSendActivationCode() {
      this.isLoading = true;
      Utils.Drawer.enable();
      this.$navigateTo(this.$routes.Home, {
        transition: {
          name: 'slideBottom',
          duration: 300,
          curve: 'linear'
        },
        clearHistory: true
      });
    }
  },
});
</script>

<style scoped>
Page {
  background-image: url("~/assets/images/bg_1.jpg");
  background-repeat: no-repeat;
}

Button {
  font-size: 20;
}

.logo {
  margin-bottom: 12;
  height: 200;
  font-weight: bold;
}
</style>


