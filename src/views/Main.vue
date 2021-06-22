<template>
    <div>
        Bem vindo
        <button @click="get">GET</button>
    </div>    
</template>
<script>
export default {
    name:'Main',
    methods:{
        get(){
              this.$store.dispatch("get");
        }
    }
}
</script>
<style>

</style>