<script>
</script>

<template>
    <main id="inlog">
        <img src="@/assets/logo.png" alt="logo">
        <form @submit.prevent="login">
            <div>
                <label for="mail">E-mail</label>
                <br>
                <input type="email" name="mail" id="mail" required>
            </div>
            <div>
                <label for="ww">Wachtwoord</label>
                <br>
                <input type="password" id="ww" name="ww" required>
            </div>
            <a href="#">wachtwoord vergeten.</a>
            <button type="submit">Log in</button>
        </form>
        <p v-if="loginError" class="error-message">Incorrect email or password</p>
    </main>
</template>

<style>
</style>