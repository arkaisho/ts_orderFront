<template>
  <div class="container" style="padding:0 30px 0 30px">
    <img class="img-login" src="../../assets/logo_login.png" alt="">
    <form @submit.prevent="efetuarLogin">
      <div class="form-group">
        <input type="text" class="form-control input-login" v-model="user.username" placeholder="Login"/>
      </div>
      <div class="form-group">
        <input type="password" class="form-control input-login" v-model="user.password" placeholder="Senha"/>
      </div>
      <div class="text-center"> 
        <button type="submit" class="btn btn-login btn-primary btn-rounded">Entrar</button>
      </div>
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
<style>
  #app{
  }
  .btn-login{
    border-color: #ef9002 !important;
    background-color: #ef9002 !important;
    border-radius: 20px !important;
    margin-top: 50px !important;
    width: 50% !important;
    max-width: 120px !important;

  }
  .img-login{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    width: 75%;
    max-height: 200px;
    max-width: 200px;
  }
  ::placeholder{
    text-align: center
  }
  .input-login{
    text-align:center;
    border: 1px solid #ccc !important;
    border-color: #ef9002 !important;
    border-radius: 20px !important;
  }

</style>