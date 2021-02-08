import Vue from 'nativescript-vue';
import CardViewPlugin from '@nativescript-community/ui-material-cardview/vue';
import Vuex from 'vuex';
import RadListView from 'nativescript-ui-listview/vue';

//import Vuex from 'vuex';
import Routes from './routes';
import Constante from './shared/constante';

import AppComponent from './components/App.vue';
import DrawerContent from "./components/DrawerContent.vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.prototype.$routes = Routes;
Vue.prototype.$constante = Constante;

Vue.prototype.$firebase = firebase;

Vue.use(RadSideDrawer);
Vue.use(CardViewPlugin);
Vue.use(Vuex);
Vue.use(RadListView);


new Vue({
  render (h) {
    return h(
      AppComponent,
      [
        h(DrawerContent, { slot: 'drawerContent' }),
        //h(defaultComponent, { slot: 'mainContent' })
      ]
    );
  }
}).$start();
