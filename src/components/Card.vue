<template>
    <div :id="'collapse'+id" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="container-card">
        <div class="description-container">
          <p>massa: {{ pasta }}</p>
          <p>recheio: {{ filling }}</p>
          <p>cobertura: {{ cobertura }}</p>
          <p>observação: {{ observation }}</p>
        </div>
        <div class="container-icon">
          <img @click="editar" class="icon" src="../../assets/edit-solid.svg" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'Card',
    props:{
        id:{
          type: Number,
          required: true
        },
        clientName:{
            type: String
        },
        cover:{
            type:String
        },
        deliveryDate:{
            type:String
        },
        filling:{
            type:String
        },
        observation:{
            type:String
        },
        pasta:{
            type:String
        },
        telphone:{
            type:String,
        },
        whatsApp:{
            type:String
        },
        cobertura:{
            type:String
        },

    },
    methods:{
      editar(){
        this.$router.push({ name: "editar" });
      }
    }

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