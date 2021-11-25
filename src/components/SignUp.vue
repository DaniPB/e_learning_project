<template>
    <!-- <guest-navbar></guest-navbar> -->
    <div class="main-container">
        <h1>Registrame</h1>
        <form>
            <input class="form-input" type="text" id="email" v-model="email">
            <label class="form-label" for="email">Usuario</label>
            <input class="form-input" type="text" id="password" v-model="password">
            <label class="form-label" for="password">Contraseña</label>
            <input class="form-input" type="text" id="password_confirmation" v-model="password">
            <label class="form-label" for="password_confirmation">Confirmar contraseña</label>
        </form>

        <div class="form-buttons">
            <button class="form-buttons__signup" v-on:click="$router.push('/')">CANCELAR</button>
            <button class="form-buttons__login" v-on:click="$router.push('/')">REGISTRARSE</button>
        </div>
    </div>
</template>

<script>
// import GuestNavbar from './GuestNavbar.vue';
export default {
    name: "SignUp",
    data: function() {
        return {
            email: "youremail@domain.com",
            password: "*********",
            password_confirmation: "*********"
        };
    },
    // components: { GuestNavbar }
}
</script>

<style scoped>
h1 {
    font-size: 56px;
    font-weight: normal;
    margin: 0;
}

.main-container {
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-top: 4rem;
}

.form-input {
    padding: 4%;
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.12);
    font-size: 20px;
}

.form-label {
    margin-left: 15px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 2rem;
}

.form-buttons {
    display: flex;
    font-size: 16px;
    font-weight: bolder;
    column-gap: 3rem;
    width: 25%;
    justify-content: center;
}

.form-buttons__login {
    border-radius: 5px;
    background-color: #6200EE;
    color: white;
    border: none;
    width: 35%;
    padding: 3%;
}

.form-buttons__signup {
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.12);
    padding: 3%;
    color: #6200EE;
    width: 35%;
}

@media (max-width: 480px) {
    .main-container {
        padding-top: 20%;
    }
    h1 {
        font-size: 44px;
    }

    .form-buttons {
        font-size: 10px;
        width: 70%;
        column-gap: 0.5rem;
    }

    .form-buttons__login {
        width: 45%;
    }

    .form-buttons__signup {
        width: 45%;
    }
}

@media (max-width: 640px) {

}

@media (max-width: 768px) {
    .form-buttons__login {
        width: 60%;
    }

    .form-buttons__signup {
        width: 60%;
    }
}

@media (max-width: 1024px) {
    form {
        width: 50%;
    }

}

@media (max-width: 1280px) {
    .main-container {
        padding-top: 20%;
    }

    .form-buttons {
        width: 40%;
    }
}
</style>