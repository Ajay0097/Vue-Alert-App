import Child from './Child.js'
export default
{
    name:'Home',
    data()
    {
        return{
        }
    },
    components:
    {
        'app-child': Child
    },
    methods: {

        Parent: function()
        {
            
            var conf = confirm("Are you Sure you want to Go to End Component")
            
            if(conf == true)
            {
                var _this=this;
                document.getElementById('data').innerText = 'Loading Plz Wait...';
                setTimeout(function(){
                    console.log(this)

                    
                     _this.$router.push('/End')
                 },1000)
            }
            else
            {
                alert("You selected Cancel")
            }
           
        }

    },
    template:
    `<div class="container-fluid">
        <h5 id="data" class="text-left">
        
        </h5>
        <div class="">
        <h1 class="text-info text-center mt-5">Parent</h1>
        </div>
        <app-child v-on:parentCo="Parent"></app-child>
    </div>
    `
}