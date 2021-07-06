<template>
    <div>
        <div >
            <h3>Pedidos</h3>
        </div>
        <div>
            <input type="search" name="" id="">
        </div>
        <div v-bind:key="pedido.id" v-for="pedido in pedidos">
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
        </div>
        <!-- Button trigger modal -->
        <button type="button" class="btn-add btn" data-toggle="modal" data-target="#staticBackdrop">
            <img src="../../assets/plus-circle-solid.svg" alt="">
        </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
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

    .btn-add {
        position: absolute;
        right: 24px;
        bottom: 36px;
        width: 80px;
    }
</style>