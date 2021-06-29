<template>
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#collapse'+id" aria-expanded="true" >
          {{ clientName }} / {{ deliveryDate }}
        </button>
      </h2>
    </div>

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
  </div>
</div>
</template>

<script>
export default {
    name:'Card',
    props:{
        id:{
          type: String,
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
    width: 100%;
  }
</style>