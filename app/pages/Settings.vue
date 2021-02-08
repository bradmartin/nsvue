<template>
    <Page>
        <ActionBar class="action-bar">
            <NavigationButton @tap="$navigateBack" android.systemIcon="ic_menu_back" />
            <GridLayout row="0" col="1" rows="auto" columns="auto, auto, *">
                <Label row="0" col="1" verticalAlignment="center" class="action-bar-title m-l-5 h2" text="Username of profile"/>
            </GridLayout>
        </ActionBar>

        <StackLayout >
            <Label text="Settings" class="h2"/>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import * as SelectedPageService from "./../shared/select-page-service.js";


export default Vue.extend({

    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Settings");
    },
    
});
</script>

<style scoped>

.contact-avatar {
  height: 200;
  width: 200;
  margin: 50;
  border-radius: 100%;
}
.contact-background {
  height: 300;
  background-color: #4781FE;
}
.contact-name {
  font-size: 20;
}
.contact-details {
  font-size: 16;
}

</style>