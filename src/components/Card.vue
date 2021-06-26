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
      <div class="card-body">
          <p>massa: {{ pasta }}</p>
          <p>cobertura: {{ filling }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:'Card',
    props:{
        id:{},
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

}
</script>