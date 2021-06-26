<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin">
      <div class="form-group">
        <label for="text">Login</label>
        <input type="text" class="form-control" v-model="user.username" />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="user.password" />
      </div>
      <button type="submit" class="btn btn-primary brn-block">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username:'',
        password:''
      }
    };
  },
  methods: {
     efetuarLogin() {
      this.$store
        .dispatch("efetuarLogin", this.user)
        .then(() => {
          this.$router.push({ name: "main" });
        });
    }
  }
};
</script>
