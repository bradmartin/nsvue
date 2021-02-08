<template>
    <Page>
        <ActionBar class="action-bar">
            <NavigationButton @tap="$navigateBack" android.systemIcon="ic_menu_back" />
            <GridLayout row="0" col="1" rows="auto" columns="auto, auto, *">
                <Label row="0" col="1" verticalAlignment="center" class="action-bar-title m-l-5 h2" text="Username of profile"/>
            </GridLayout>
        </ActionBar>
        
        <ScrollView>
          <GridLayout rows="auto, *" columns="*">
            <AbsoluteLayout row="0" height="300" backgroundColor="blue">
                <Image src="~/assets/images/profil_femme.jpg" 
                  stretch="aspectFill"
                  width="100%"
                  class="-contact-avatar"
                  left="0" right="0"/>

                <GridLayout columns="*, *, *" height="50" left="0" top="250" width="100%" margin="0" opacity="0.7" :backgroundColor="$constante.color.blue">
                  <Button col="0" 
                    class="mdi btnFab"
                    text.decode="&#xF03F2;"
                    @tap="onTapCalling"/>

                  <Button col="1" 
                    class="mdi btnFab"
                    text.decode="&#xF036B;"
                    @tap="onTapVideoCalling"/>

                  <Button col="2" 
                    class="mdi btnFab"
                    text.decode="&#xF06A2;"
                    @tap="onTapChat"/>
                </GridLayout>
            </AbsoluteLayout>
                
            <ScrollView row="1" class="p-y-20">
              <StackLayout padding="2">
                <Label class="mdi h2 text-center" textWrap="true">
                  <FormattedString color="black">
                    <Span text="Fabrice Iyongo" />
                  </FormattedString>
                </Label>
                
                <Label class="mdi">
                  <FormattedString color="black">
                    <Span text.decode="&#xF05F5;" />
                    <Span text=" " />
                    <Span text="DR Congo/Kinshasa" />
                  </FormattedString>
                </Label>

                <Label class="mdi">
                  <FormattedString color="black">
                    <Span text.decode="&#xF029D;" />
                    <Span text=" " />
                    <Span text="Homme" />
                  </FormattedString>
                </Label>

                <Label class="mdi">
                  <FormattedString color="black">
                    <Span text.decode="&#xF0A56;" />
                    <Span text=" " />
                    <Span text="Célibataire" />
                  </FormattedString>
                </Label>

                <Label class="mdi">
                  <FormattedString color="black">
                    <Span text.decode="&#xF142E;" />
                    <Span text=" " />
                    <Span text="Interressé par les hommes" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </ScrollView>
          </GridLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

  methods: {
    onTapCalling() {
      alert('lancer appel');
    },

    onTapVideoCalling() {
      alert('lancer appel video');
    },


    onTapChat() {
      alert('écrire un message');
    }
  }
    
});
</script>

<style scoped>

Button {
  font-size: 30;
}

.btnFab {
  width: 40;
  height: 40;
  border-radius: 20;
}

.contact-avatar {
  height: 200;
  width: 200;
  margin: 50;
  border-radius: 100%;
}

.contact-name {
  font-size: 20;
}
.contact-details {
  font-size: 16;
}

</style>