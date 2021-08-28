<template>
  <div class="container">
    <img src="../../assets/logo_login.png" alt="">
    <form @submit.prevent="efetuarLogin">
      <div class="form-group">
        <input type="text" class="form-control" v-model="user.username" placeholder="Login"/>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="user.password" placeholder="Senha"/>
      </div>
      <div class="text-center"> 
        <button type="submit" class="btn btn-primary btn-rounded">Entrar</button>
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
    color: #ef9002;
    padding-left: 30px;
    padding-right: 30px;
  }
  .btn{
    border-color: #ef9002 !important;
    background-color: #ef9002 !important;
    border-radius: 20px !important;
    margin-top: 50px !important;
    width: 50% !important;
    max-width: 120px !important;

  }
  img{
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
  input{
    border: 2px solid #ccc !important;
    border-radius: 4px !important;
    border-color: #ef9002 !important;
    border-radius: 20px !important
  }

</style>