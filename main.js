import Vue from './vue.js'
import Routes from './Routes.js'
import Home from './Components/Home.js'
import Child from './Components/Child.js'
import End from './Components/End.js'


Vue.use(VueRouter);

const router = new VueRouter({
    routes : Routes
});

export const Bus = new Vue();

var app = new Vue({
    el:'#app',
    router,
    components:{
        'app-home': Home,
        'app-child': Child,
        'app-End': End
    },
    data()
    {
        return{
        }
    },
    created()
    {
    
            Bus.$on('parentfun',()=>{
                alert("This is a component");

            })
        
    }
    
});

