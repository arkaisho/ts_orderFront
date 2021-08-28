<template>
    <div>
        <button
            type="button"
            class="btn-add btn"
            data-toggle="modal"
            data-target="#addModal"
        >
            <img src="../../assets/plus-circle-solid.svg" alt="" />
        </button>
        <div class="navbar">
            <h3 class="title font-weight-bold">Pedidos</h3>
        </div>
        <div class="form-outline" style="margin-right:40px">
            <input
                class="searchbar form-control"
                type="search"
                v-model="searchString"
                placeholder="Pesquisar"
            />
        </div>
        <div v-bind:key="pedido.id" v-for="pedido in searchResults">
            <div class="accordion" id="accordionExample" >
                <div class="card">
                    <div
                        class="card-header"
                        id="headingOne"
                        data-toggle="collapse"
                        :data-target="'#collapse' + pedido.id"
                    >
                        <h2 class="mb-0">
                            <button
                                class="btn"
                                style="color:black;padding:0;"
                                aria-expanded="true"
                            >
                                <p style="color:black;margin:0;">
                                    {{ pedido.clientName }} :
                                    {{ pedido.deliveryDate }}
                                </p>
                            </button>
                        </h2>
                    </div>
                    <Card :pedido="pedido" />
                </div>
            </div>
        </div>
        <AddModal />
    </div>
</template>
<script>
import Card from "../components/Card.vue";
import AddModal from "../components/AddModal.vue";

export default {
    name: "Main",
    components: {
        Card,
        AddModal,
    },
    mounted() {
        this.$store.dispatch("get").then(() => {
            this.pedidos = this.$store.state.pedidos.pedidos;
        });
    },
    data() {
        return {
            searchString: "",
            pedidos: [],
            pedidosFiltrados: [],
        };
    },
    computed: {
        searchResults() {
            if (this.searchString) {
                return this.pedidos.filter((item) => {
                    return item.clientName
                        .toLowerCase()
                        .includes(this.searchString.toLowerCase());
                });
            } else {
                return this.pedidos;
            }
        },
    },
};
</script>
<style scoped>
.btn-add {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    z-index: 50;
    margin-top: auto;
}
.accordion {
    margin: 20px 20px 0px 20px;
}
.searchbar {
    margin: 20px 0px 0px 20px;
}
.title {
    color: white;
    text-align: center;
}
.navbar {
    padding: 20px 0 10px 20px;
    background-color: #ef9002;
}
</style>
