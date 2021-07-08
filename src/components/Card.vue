<template>
    <div :id="'collapse'+pedido.id" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="container-card">
        <div class="description-container">
          <p>massa: {{ pedido.pasta }}</p>
          <p>recheio: {{ pedido.filling }}</p>
          <p>cobertura: {{ pedido.cobertura }}</p>
          <p>observação: {{ pedido.observation }}</p>
        </div>
        <div class="container-icon btn-add btn" type="button" data-toggle="modal" :data-target="'#editModal'+pedido.id">
          <img class="icon" src="../../assets/edit-solid.svg" alt="">
        </div>
        <!-- Modal -->
        <EditModal :pedido="pedido"/>
      </div>
    </div>
</template>

<script>
import EditModal from '../components/EditModal.vue';
export default {
    name:'Card',
    props:{
        pedido:{
          type:Object
        }
    },
    components:{
      EditModal,
    },
}
</script>
<style scoped>
  .container-card{
    display: flex;
    flex-direction: row;
    padding: 8px;
  }
  .container-icon{
    width: 20%;
    display: flex;
    align-items: center;
  }
  .description-container {
    width: 80%;
  }
  .icon {
    width: 32px;
  }
</style>