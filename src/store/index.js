import Vuex from "vuex";
import Vue from "vue";
import http from "@/http";
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

const state = {
    token: null,
    pedidos: []
};

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token }) {
        state.token = token;
    },
    DESLOGAR_USUARIO(state) {
        state.token = null;
        state.user = {};
    },
    DEFINIR_PEDIDOS(state, pedidos) {
        state.pedidos = pedidos;
    }
};

const actions = {
    efetuarLogin({ commit }, user) {
        return new Promise((resolve, reject) => {
            http.post("/login", user)
                .then((response) => {
                    commit("DEFINIR_USUARIO_LOGADO", {
                        token: response.data.token,
                    });
                    resolve(response.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    get({ commit }){
        return new Promise((resolve, reject) => {
            http.get()
                .then(res => {
                    commit("DEFINIR_PEDIDOS", {
                        pedidos: res.data
                    });
                    resolve(res.data);

                })
                .catch(err => reject(err))
        })
    },

    put(status,pedido){
        return new Promise((resolve, reject) => {
            http.put(`/update/${pedido.id}`,pedido)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => reject(err))
        })
    },

     post(status,pedido){
        return new Promise((resolve, reject) => {
            http.post(`/create`,pedido)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => reject(err))
        })
    },

    delete(status,id){
        return new Promise((resolve, reject) => {
            http.delete(`/delete/${id}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => reject(err))
        })
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: [vuexLocal.plugin]

});
