import { Application, isAndroid } from "@nativescript/core";

let Drawer = {
    nativeView() {
        return Application.getRootView();
    },

    show() {
        if (this.nativeView() && this.nativeView().showDrawer) {
            this.nativeView().showDrawer();
        }
    },

    close() {
        if (this.nativeView() && this.nativeView().showDrawer) {
            this.nativeView().closeDrawer();
        }
    },

    enable() {
        if (this.nativeView()) {
            this.nativeView().gesturesEnabled = true;
        }
        
    },

    disable() {
        if (this.nativeView()) {
            this.nativeView().gesturesEnabled = false;
        }
    }
};

let User = {
    isConnected: false
};


export default {
    Drawer,
    User 
};
