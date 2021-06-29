<template>
    <div>
        <div >
            <h3>Pedidos</h3>
        </div>
        <div>
            <input type="search" name="" id="">
        </div>
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
        <div>
            <img src="../../assets/plus-circle-solid.svg" alt="">
        </div>
    </div>    
</template>
<script>
import Card from '../components/Card.vue';

export default {
    name:'Main',
    components:{
        Card
    },
    mounted(){
        this.$store.dispatch("get").then(()=> {
            this.pedidos = this.$store.state.pedidos.pedidos;
                        console.log(this.pedidos)
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
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
</style>