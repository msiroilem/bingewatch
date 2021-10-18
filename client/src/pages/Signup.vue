<template>
  <div class="signout-page">
    <h3>Signup</h3>
    <form @submit.prevent="register">
      <div>
        <label for="name">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          @input.prevent="handleName"
          @value="username"
        />
      </div>

      <div>
        <label for="email">
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          @input.prevent="handleEmail"
          @value="email"
        />
      </div>

      <div>
        <label for="password">
          Password
        </label>

        <input
          type="password"
          name="password"
          id="password"
          @input.prevent="handlePassword"
          @value="password"
        />
      </div>

      <div>
        <label for="confirm-password">
          Confirm Password
        </label>

        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          @input.prevent="handleConfirmPassword"
          @value="confirmPassword"
        />
      </div>

      <div>
        <button type="submit">
          Register
        </button>
      </div>
    </form>

    <div>
      <h3>Login</h3>
      <form @submit.prevent="login">
        <div>
          <label for="name">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            @input.prevent="handleName"
            @value="username"
          />
        </div>

        <div>
          <label for="password">
            Password
          </label>

          <input
            type="password"
            name="password"
            id="password"
            @input.prevent="handlePassword"
            @value="password"
          />

          <div>
            <button type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { RegisterUser, LoginUser } from '../services/Auth'
export default {
  name: 'signup',
  components: {},
  data: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  methods: {
    handleName(e) {
      this.username = e.target.value
    },
    handleEmail(e) {
      this.email = e.target.value
    },
    handlePassword(e) {
      this.password = e.target.value
    },
    handleConfirmPassword(e) {
      this.confirmPassword = e.target.value
    },
    async register() {
      const newUser = await RegisterUser({
        username: this.username,
        email: this.email,
        password: this.password
      })
      return newUser
    },
    async login() {
      const loggedInUser = await LoginUser({
        username: this.username,
        password: this.password
      })
      return loggedInUser
    }
  }
}
</script>
