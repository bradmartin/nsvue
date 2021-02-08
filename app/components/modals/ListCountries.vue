<template>

    <Page>
        <FlexBoxLayout paddingTop="40" flexDirection="column">
            <StackLayout height="80" backgroundColor="#cfd8dc" padding="5">
                <SearchBar ref="searhBar" hint="Search your country" v-model="wordSearched" 
                    @textChange="onTextChanged" @loaded="onNoGetFocusByDefault"/>
            </StackLayout>
            
            <ListView for="item in listOfCountries" @itemTap="onTapChooseCountry">
                <v-template>
                    <FlexBoxLayout flexDirection="row" >
                        <Label col="0" :text="item.flag"
                            width="50"
                            textWrap="true"/>

                        <Label col="1" :text="item.name"
                            width="230"
                            textWrap="true"/>
                            
                        <Label col="2" :text="item.dial_code"
                            textAlignment="right"
                            textWrap="true"/>
                    </FlexBoxLayout>
                </v-template>
            </ListView>
        </FlexBoxLayout>    
    </Page>

</template>

<script lang="ts">

import Vue from 'vue';
import Countries from './../../assets/ressources/countries';
import { isAndroid } from '@nativescript/core/platform';

export default Vue.extend({
    data() {
        return {
            listOfCountries: Countries,
            wordSearched: ''      
        };
    },

    beforeCreate(){

    },

    mounted() {
        
    },

    methods: {
        onTextChanged() {
            this.listOfCountries = [];
            let regex = new RegExp(this.wordSearched, 'i');
            for (let item of Countries) {
                let result = item.name.search(regex);
                if(result > -1) {
                    this.listOfCountries.push(item);
                }
            }
        },

        onTapChooseCountry(event: any) {
            this.$modal.close(event.item);
        },

        onNoGetFocusByDefault() {
            if(isAndroid) {
                this.$refs.searhBar.nativeView.android.clearFocus();
            }
        }
    }
});

</script>

<style scoped>
Label, SearchBar {
    font-size: 20;
    font-family: arialnarrow, "arialnarrow";
}
</style>