<template>
    <div >
        <div v-bind:key="pedido.id" v-for="pedido in pedidos">
            <Card
                :id="pedido.id"
                :clientName="pedido.clientName"
                :telphone="pedido.telphone"
                :deliveryDate="pedido.deliveryDate"
                :observation="pedido.observation"
                :pasta="pedido.pasta"
                :filling="pedido.filling"
            />
        </div>
    </div>    
</template>
<script>
import Card from '../components/Card.vue';
export default {
    name:'Main',
    components:{
        Card,
    },
    mounted(){
        this.$store.dispatch("get").then(()=> {
            this.pedidos = this.$store.state.pedidos.pedidos;
        })
        
    },
    data(){
        return{
            pedidos: []
        }
    }
}
</script>
<style scoped>
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
