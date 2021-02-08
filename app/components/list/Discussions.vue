<template lang="html">
   <Scrollview padding="1">
        <GridLayout rows="160, *" height="100%">
            <StackLayout row="0">
                <Label class="h2" text="Ils sont nouveaux"/>
                <StackLayout class="hr" marginBottom="0" paddingBottom="0"/>

                <ScrollView orientation="horizontal">
                    <StackLayout orientation="horizontal" padding="2">
                        <StackLayout v-for="item in list" padding="1" marginRight="2" @tap="onTapGoToProfile">
                            <Image
                                width="80"
                                height="80"
                                class="img-circle -border"
                                :borderColor="$constante.color.pink"
                                src="~/assets/images/profil_femme.jpg"
                                stretch="fill" />

                            <Label text="Fabrice Iyongo" textAlignment="center"/>
                        </StackLayout>
                    </StackLayout>
                </ScrollView>
            </StackLayout>
            

            <StackLayout row="1">
                <Label class="h2" text="Discussions" />
                
                <StackLayout class="hr" margin="0"/>

                <ListView for="item in list">
                    <v-template>

                        <StackLayout orientation="horizontal" 
                            style="border-bottom-width:1;border-bottom-color:#E4E4E4;"
                            padding="0"
                            @onTap="onTapDiscussions">
                            
                            <StackLayout width="20%">
                                <Image :src="item.image"
                                    stretch="fill" class="img-circle" />
                            </StackLayout>
                            
                            <StackLayout marginLeft="10" paddingTop="3"
                                width="48%">
                                <Label :text="item.username" fontSize="25" />
                                <Label :text="item.message" fontSize="15"/>
                            </StackLayout>
                            
                            <StackLayout marginLeft="10" paddingTop="3"
                                width="60%">
                                <Label :text="item.date" color="black" fontSize="15"/>
                                <Label text="lol"
                                    style="font-size:17;text-align:center;margin-top:12;color:#1aa3ff;"
                                    class="font-awesome" />
                            </StackLayout>
                        </StackLayout>

                    </v-template>
                </ListView>
            </StackLayout>
        </GridLayout>
    </Scrollview>

</template>

<script lang="ts">
import Vue from "vue";

let List = [];

for(let i = 1; i<= 30; i++) {
    List.push({
        image: '~/assets/images/profil_homme.jpg',
        username: 'Fabiyo',
        message: 'Bonjour Mr ' + i,
        date: (31 - i) + '/01/2020'
    });
}

export default Vue.extend({

    data() {
        return {
            list: List
        }
    },

    methods: {
        onTapDiscussions() {
            this.$navigateTo(this.$routes.Chat);
        },

        onTapGoToProfile() {
            this.$navigateTo(this.$routes.Profile);
        }
    }

});

</script>