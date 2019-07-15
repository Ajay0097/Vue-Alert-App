export default
{
    data()
    {
        return{

        }
    },
    methods: {
        compfun: function()
        {
            this.$emit('parentCo');
        }
    },
    template:
    `
    <div class="container-fluid">
        <div class="text-center">
            <h1 class="text-info">Child</h1>
        </div>
        <div class="text-center">
            <button class="btn btn-danger btn-small mt-5" @click="compfun">Hit Me</button>
        </div>
    </div>
    `
}
