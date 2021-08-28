<template>
    <div class="modal fade" :id="'addModal'" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addModalLabel">Cadastrar</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <form class="pedido-form" action="">
                <span>Cliente</span>
                <input type="text" v-model="pedido.clientName" placeholder="Nome do Cliente">
                 <span>Data de Entrega</span>
                <input type="date" v-model="pedido.deliveryDate" placeholder="Data de Entrega">
                <span>Massa</span>
                <input type="text" v-model="pedido.pasta" placeholder="Nomde da Massa">
                <span>Recheio</span>
                <input type="text" v-model="pedido.filling" placeholder="Nome do Recheio">
                <span>cobertura</span>
                <input type="text" v-model="pedido.cover" placeholder="Nome da Cobertura">
                <span>Observação</span>
                <input type="text" v-model="pedido.observation" placeholder="Nome da Observação">
                <span>Preço</span>
                <input type="text" v-model="pedido.price" placeholder="Nome da Cobertura">
                <span>whatsApp</span>
                <input type="text" v-model="pedido.whatsApp" placeholder="Nome da Cobertura">
              </form>
          </div>
          <div class="modal-footer">
            <button @click="salvar" type="button" class="btn btn-primary salvar" data-dismiss="modal" aria-label="Close">Salvar</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'AddModal',
    data(){
        return{
            pedido : {
                clientName:'',
                deliveryDate:"08/20/2021",
                telphone:'',
                pasta:'',
                filling:'',
                cover:'',
                observation:'',
                whatsApp:'',
                price:0
            }
        }
    },
    methods:{
       async salvar(){
         await this.$store.dispatch("post", this.pedido);
         
         location.reload(true);
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
  .salvar{
    background-color:#ef9002;
  }
  ::placeholder{
    text-align: left
  }
</style>