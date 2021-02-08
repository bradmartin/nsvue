<template lang="html">
    <RadListView for="(item, index) in listProfiles"  
        @itemTap="" padding="5">

        <v-template>
            <MDCardView :rippleColor="$constante.color.lightBlue" @tap="onTapGoToProfile" 
                margin="2" borderWidth="1" elevation="0.5">

                <GridLayout columns="auto, *, 50">
                    <Image col="0"
                        src="~/assets/images/profil_homme.jpg"
                        stretch="aspectFill"
                        margin="5"
                        class="img-circle"
                        width="80"
                        height="80"/>
                    
                    <StackLayout col="1" paddingTop="15">
                        <Label>
                            <FormattedString>
                                <Span class="mdi" text.decode="&#xF0644;" />
                                <Span text=" " />
                                <Span text="Fabrice Iyongo, 30" />
                            </FormattedString>
                        </Label>

                        <Label textWrap="true">
                            <FormattedString>
                                <Span class="mdi" text.decode="&#xF0CF0;" />
                                <Span text=" " />
                                <Span text="Ingenieur IT" />
                            </FormattedString>
                        </Label>

                        <Label textWrap="true">
                            <FormattedString>
                                <Span class="mdi" text.decode="&#xF05F5;" />
                                <Span text=" " />
                                <Span text="RD Congo/Kinshasa" />
                            </FormattedString>
                        </Label>
                    </StackLayout>

                    <StackLayout col="2">

                    </StackLayout>
                    
                </GridLayout>
            </MDCardView>
        </v-template>

    </RadListView>
    
</template>

<script lang="ts">

import Vue from 'vue';
import Countries from "./../../assets/ressources/countries";


let List = [];

for(let i =1; i <= 20; i++) {
    List.push({
        id: i, nessage: 'message' + ' ' + 1
    });
}

export default Vue.extend({

    data() {
        return {
            listProfiles: List,
            country: Countries[50]
        }
    },

    methods: {
        onTapGoToProfile() {
            this.$navigateTo(this.$routes.Profile);
        }
    }

});

</script>

<style scoped>
    Label {
        padding: 0;
    }
</style>