<template>
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" sdata-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {{ clientName }} / {{ deliveryDate }}
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
          <p>massa: {{ pasta }}</p>
          <p>cobertura: {{ filling }}</p>
      </div>
    </div>
  </div>
</div>
    <!-- <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ clientName }}</h5>
        <p class="card-text">{{ telphone }}</p>
        <p class="card-text"> {{ observation }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->
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

    }

}
</script>