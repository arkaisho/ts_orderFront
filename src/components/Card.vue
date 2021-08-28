<template>
    <div
        :id="'collapse' + pedido.id"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
    >
        <div class="container-card">
            <div class="description-container">
                <p>
                    <span class="information-title">Data de entrega:</span>
                    {{ pedido.deliveryDate }}
                </p>
                <p>
                    <span class="information-title">Massa:</span>
                    {{ pedido.pasta }}
                </p>
                <p>
                    <span class="information-title">Recheio:</span>
                    {{ pedido.filling }}
                </p>
                <p>
                    <span class="information-title">Cobertura:</span>
                    {{ pedido.cover }}
                </p>
                <p>
                    <span class="information-title">Observação:</span>
                    {{ pedido.observation }}
                </p>
                <p>
                    <span class="information-title">Preço:</span>
                    R${{ pedido.price }},00
                </p>
            </div>
            <div class="container-icons">
                <div class="container-icon btn-add btn">
                    <a :href="'https://api.whatsapp.com/send?phone='+pedido.whatsApp">
                      <img 
                          class="icon"
                          src="../../assets/whatsapp-icon.svg"
                          alt=""
                          style="width:30px"
                      />
                    </a>
                </div>
                <div
                    class="container-icon btn-add btn"
                    type="button"
                    data-toggle="modal"
                    :data-target="'#editModal' + pedido.id"
                >
                    <img
                        class="icon"
                        src="../../assets/edit-icon.svg"
                        alt=""
                        style="width:30px"
                    />
                </div>
                <div class="container-icon btn-add btn" @click="deletar">
                    <img
                        class="icon"
                        src="../../assets/trash-icon.svg"
                        alt=""
                        style="width:34px"
                    />
                </div>
            </div>
            <EditModal :pedido="pedido" />
        </div>
    </div>
</template>

<script>
import EditModal from "../components/EditModal.vue";
export default {
    name: "Card",
    props: {
        pedido: {
            type: Object,
        },
    },
    components: {
        EditModal,
    },
    methods: {
        async deletar() {
            await this.$store.dispatch("delete", this.pedido.id);
            location.reload(true);
        },
    },
};
</script>
<style scoped>
.container-card {
    display: flex;
    flex-direction: row;
    padding: 20px;
}
.container-icons {
    display: flex;
    flex-direction: column;
}
.description-container {
    width: 80%;
}
.information-title {
    font-weight: bold;
}
</style>
