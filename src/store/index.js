import Vuex from "vuex";
import Vue from "vue";
import http from "@/http";

Vue.use(Vuex);

const state = {
    token: null,
    user: {},
};

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, user }) {
        state.token = token;
        state.user = user;
    },
    DESLOGAR_USUARIO(state) {
        state.token = null;
        state.user = {};
    },
};

const actions = {
    efetuarLogin({ commit }, user) {
        return new Promise((resolve, reject) => {
            http.post("/login", user)
                .then((response) => {
                    commit("DEFINIR_USUARIO_LOGADO", {
                        token: response.data.token,
                        user: response.data.user,
                    });
                    resolve(response.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    get(){
        return new Promise((resolve, reject) => {
            http.get()
                .then(res => {
                    // console.log(res)
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
});
