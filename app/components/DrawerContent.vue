<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="nt-drawer__header">
            <Image class="nt-drawer__header-image mdi t-36" src.decode="font://&#xF0644;"/>
            <Label class="nt-drawer__header-brand" text="User Name"/>
            <Label class="nt-drawer__header-footnote" text="username@mail.com"/>
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')"
                            @tap="onNavigationItemTap($routes.Home)">
                    <Label col="0" text.decode="&#xF02DC;" class="nt-icon mdi" fontSize="25"/>
                    <Label col="1" text="MeetU" class="p-r-10" fontSize="15"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Proifle' ? ' -selected': '')"
                            tap="onNavigationItemTap(Settings)">
                    <Label col="0" text.decode="&#xF0630;" class="nt-icon mdi" fontSize="25"/>
                    <Label col="1" text="Mon profil" class="p-r-10" fontSize="15"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Contacts' ? ' -selected': '')"
                            tap="onNavigationItemTap(Settings)">
                    <Label col="0" text.decode="&#xF06CB;" class="nt-icon mdi" fontSize="25"/>
                    <Label col="1" text="Mes contacts" class="p-r-10" fontSize="15"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Transactions' ? ' -selected': '')"
                            tap="onNavigationItemTap(Settings)">
                    <Label col="0" text.decode="&#xF0A27;" class="nt-icon mdi" fontSize="25"/>
                    <Label col="1" text="Mes transactions" class="p-r-10" fontSize="15"/>
                </GridLayout>

                <StackLayout class="hr"/>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Settings' ? ' -selected': '')"
                            @tap="onNavigationItemTap($routes.Settings)">
                    <Label col="0" text.decode="&#xF0493;" class="nt-icon mdi" fontSize="25"/>
                    <Label col="1" text="Settings" class="p-r-10" fontSize="15"/>
                </GridLayout>

            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script lang="ts">

import Vue from 'vue';
import SelectedPageService from "./../shared/select-page-service.js";
import Utils from './../shared/utils';

export default Vue.extend({
    
    mounted() {
      SelectedPageService.getInstance().selectedPage$
        .subscribe((selectedPage) => this.selectedPage = selectedPage);
    },

    data() {
      return {
        //Home: Home,
        selectedPage: ""
      };
    },
    
    components: {
      //Home,
      
    },

    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component);
        Utils.Drawer.close();
      }
    }
  });
</script>

<style scoped>

</style>