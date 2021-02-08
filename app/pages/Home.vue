<template lang="html">

    <Page class="page" actionBarHidden="false">
        <ActionBar title="Yaotala" class="police-harabara">
          <NavigationButton class="mdi" icon.decode="font://&#xF035C;" @tap="onTapShowDrawer" />
        </ActionBar>

        <BottomNavigation selectedIndex="0">
          <TabStrip class="bg-app">
              <TabStripItem>
                  <Label text="Home" />
                  <Image class="mdi" src.decode="font://&#xF02DC;" />
              </TabStripItem>

              <!--TabStripItem >
                  <Label text="Search" />
                  <Image class="mdi" src.decode="font://&#xF0016;" />
              </TabStripItem-->

              <TabStripItem>
                  <Image class="mdi" src.decode="font://&#xF0860;" />
                  <Label text="Discussions" />
              </TabStripItem>

              <TabStripItem>
                  <Label text="Notifications" />
                  <Image class="mdi" src.decode="font://&#xF009A;" />
              </TabStripItem>
          </TabStrip>

          <TabContentItem>
              <!--Label text="Home" /-->
              <ns-list-profiles />
          </TabContentItem>

          <!--TabContentItem>
              <ns-search />
          </TabContentItem-->

          <TabContentItem>
              <!--Label text="Discussions" /-->
              <ns-list-discussions />
          </TabContentItem>

          <TabContentItem>
              <ns-list-notifications />
          </TabContentItem>

      </BottomNavigation>
    </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";

  import Utils from "./../shared/utils";
  import * as SelectedPageService from "./../shared/select-page-service.js";

  import NsListProfiles from '~/components/list/Profiles.vue';
  import NsListDiscussions from '~/components/list/Discussions.vue';
  import NsListNotifications from '~/components/list/Notifications.vue';
  import NsSearch from '~/components/Search.vue';


  export default Vue.extend({
    
    components: {
      NsListProfiles,
      NsListDiscussions,
      NsListNotifications,
      NsSearch
    },

    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
    },
    
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      onTapShowDrawer() {
        Utils.Drawer.show();
      },

      selectedIndexChange() {
        
      }
    }  
  });
</script>

<style scoped lang="scss">
  
  
</style>
