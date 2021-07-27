<template>
    <div class="modal fade" :id="'editModal'+pedido.id" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">{{ pedido.clientName}} / {{ pedido.deliveryDate }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <form class="pedido-form" action="">
                <span>Cliente</span>
                <input type="text" v-model="pedido.clientName" placeholder="Nome do Cliente">
                 <span>Data de Entrega</span>
                <input type="text" v-model="pedido.deliveryDate" placeholder="Data de Entrega">
                <span>Massa</span>
                <input type="text" v-model="pedido.pasta" placeholder="Nomde da Massa">
                <span>Recheio</span>
                <input type="text" v-model="pedido.filling" placeholder="Nome do Recheio">
                <span>cobertura</span>
                <input type="text" v-model="pedido.cobertura" placeholder="Nome da Cobertura">
                <span>Observação</span>
                <input type="text" v-model="pedido.observation" placeholder="Nome da Observação">
              </form>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
            <button @click="atualizar" type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close">Salvar</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'EditModal',
    props:{
        pedido:{}
    },
    methods:{
      atualizar(){
         this.$store.dispatch("put", this.pedido);
      }
    }
}
</script>
<style scoped>
  .pedido-form{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  }
</style>