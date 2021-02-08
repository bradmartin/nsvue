<template lang="html">
    
    <RadSideDrawer ref="drawer" drawerLocation="Left" :gesturesEnabled="isConnected" :drawerTransition="transition">
        <StackLayout ~drawerContent backgroundColor="#ffffff">
            <slot name="drawerContent"/>
        </StackLayout>
        
        <Frame ~mainContent ref="drawerMainContent">
            <slot name="mainContent">
                <ns-home-page v-if="isConnected"/>
                <ns-login-page v-else="isConnected"/>
            </slot>
        </Frame>
    </RadSideDrawer>


</template>

<script lang="ts">
import Vue from 'vue';

import {SlideInOnTopTransition} from 'nativescript-ui-sidedrawer';
import NsLoginPage from '~/pages/Login.vue';
import NsHomePage from '~/pages/Home.vue';
import NsChatPage from '~/pages/Chat.vue';


let isConnected = false;

export default Vue.extend({

    components: {
        NsLoginPage,
        NsHomePage,
        NsChatPage
    },

    data() {
      return {
            isConnected: isConnected,
            transition: new SlideInOnTopTransition()
      };
    }
});

</script>