<template>
    <div class="login">
    <div class="card_view">
      <h1 class="card_title">LOGIN</h1>
      <div class="form_box">
        <form v-on:submit.prevent="login">
          <div class="input_box">
            <div class="icon_box">
              <i class="fas fa-user-tie"></i>
            </div>
            <input class="myinput" type="text" placeholder="Username" v-model="username"/>
          </div>
          <div class="input_box input_top_margin">
            <div class="icon_box">
              <i class="fas fa-key"></i>
            </div>
            <input class="myinput" type="password" placeholder="Password" v-model="password"/>
          </div>
          <div class="input_box input_top_margin">
            <input class="submit_button" type="submit" value="Login">
          </div>
        </form>
        <p v-if="incorrectAuth">Incorrect Username or Password</p>
      </div>
      <div class="bottom_text_box">
          <h3 class="bottom_text">
            Don't have an account?
             <router-link to="/Signup" class="custom_link">SignUp</router-link>
          </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'login',
    data(){
        return{
            username:'',
            password:'',
            incorrectAuth: false
        }
    },
    methods:{
        login(){
            this.$store.dispatch('userLogin',{
                username:this.username,
                password:this.password
            })
            .then(() =>{
                this.$router.push({name: 'posts' })
            })
            .catch(err=>{
                console.log(err)
                this.incorrectAuth = true
            })
        }
    }
}
</script>
