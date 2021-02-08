<template>
    <Page>
        <ActionBar class="action-bar">
            <NavigationButton @tap="$navigateBack" android.systemIcon="ic_menu_back" />
            <GridLayout row="0" col="1" rows="auto" columns="auto, auto, *">
                <Image
                    class="contact-avatar"
                    row="0"
                    col="0"
                    stretch="aspectFill"
                    verticalAlignment="center"
                    horizontalAlignment="center"
                    src="~/assets/images/profil_homme.jpg"
                    />
                <Label row="0" col="1" verticalAlignment="center" class="h2 action-bar-title m-l-5" text="Username"/>
            </GridLayout>
        </ActionBar>

        <GridLayout rows="*, auto">
            
            <ScrollView id="zone-chat" row="0">
                <ListView for="message in messages" separatorColor="transparent">
                    <v-template>
                        <StackLayout width="275" >
                            <GridLayout rows="auto, auto"
                                borderLeftWidth="5" borderLeftColor="#76ff03" backgroundColor="#fafafa"
                                marginLeft="10" borderRadius="10">
                                <Label row="2" :text="message.content" />
                            </GridLayout>
                        </StackLayout>
                    </v-template>
                </ListView>
                
            </ScrollView>
            

            <GridLayout ref="zoneTextView" row="1" columns="*, 60" class="nt-form">
                <TextView col="0" hint="Write your message !"
                    autocorrect="true"
                    ref="textView"
                    class="-rounded -border" 
                    padding="2"
                    v-model="message"
                    @focus="onFocusOnTextView"
                    @blur="onBlurOnTextView"
                    backgroundColor="#f5f5f5"
                    height="auto" minHeight="40" maxHeight="100"/>
                
                <Button col="1" 
                    class="mdi btnFab"
                    translateX="-10"
                    text.decode="&#xF048A;"
                    @tap="sendMessage"/>
            </GridLayout>
        </GridLayout>

    </Page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            //zoneTextViewTranslateY: 10,
            messages: [],
            message: ''
        }
    },

    mounted() {
        
    },

    methods: {
        onFocusOnTextView () {
            //this.$refs.zoneTextView.nativeView.translateY= "-30";
        },

        onBlurOnTextView() {
            //this.$refs.zoneTextView.nativeView.translateY= "10";
        },

        sendMessage() {
            
            if(this.message.trim() != "") {
                this.messages.push({
                    isMe: true,
                    content: this.message
                });
            }
            
            console.dir({
                isMe: true,
                content: this.message
            });
            
            this.message='';
        }
    },

    watch: {
        zoneTextViewTranslateY(newValue){
            
        }
    }
});

</script>

<style scoped>

#zone-chat {
  background-image: url("~/assets/images/bg_1.jpg");
  background-repeat: no-repeat;
}

.btnFab {
  width: 50;
  height: 50;
  border-radius: 25;
  font-size: 35;
  color: #009688;
}

.contact-avatar {
  height: 48;
  width: 48;
  border-radius: 50%;
  border-color: #999;
  border-width: 1;
}

.message {
    padding: 10;
    border-radius: 15;
    width: 75%;
    margin-bottom: 10;
    font-size: 15;
}

.-in {
    background-color: aqua;
}

.-out {
    background-color: #f5f5f5;
}
</style>