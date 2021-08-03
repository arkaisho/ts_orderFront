<template>
    <div>
        <button type="button" class="btn-add btn" data-toggle="modal" data-target="#addModal">
            <img src="../../assets/plus-circle-solid.svg" alt="">
        </button>
        <div >
            <h3>Pedidos</h3>
        </div>
        <div>
            <input type="search" v-model="searchString" name="" id="">
        </div>
        <div v-bind:key="pedido.id" v-for="pedido in searchResults">
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#collapse'+pedido.id" aria-expanded="true" >
                          {{ pedido.clientName }} / {{ pedido.deliveryDate }}
                        </button>
                      </h2>
                    </div>
                    <Card
                      :pedido="pedido"
                    />
                </div>
            </div>  
        </div>
    <AddModal />
    </div>
</template>
<script>
import Card from '../components/Card.vue';
import AddModal from '../components/AddModal.vue';

export default {
    name:'Main',
    components:{
        Card,
        AddModal
    },
    watch(){
        this.$store.dispatch("get").then(()=> {
            this.pedidos = this.$store.state.pedidos.pedidos;
        })
        
    },
    data(){
        return{
          searchString:"",
          pedidos: [],
          pedidosFiltrados: []
        }
    },
  computed: {
    searchResults(){
      if(this.searchString){
      return this.pedidos.filter((item)=>{
        return  item.clientName.toLowerCase().includes(this.searchString.toLowerCase())
      })
      }else{
        return this.pedidos;
      }
    }
  }
}
</script>
<style scoped>
    .btn-add {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 80px;
        z-index: 50;
        margin-top: auto;
     }
</style>