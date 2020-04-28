<template>
  <div class="subscriptionForm">
    <form>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" required>
        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label>First Name</label>
        <input 
          type="firstName" 
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input 
          type="lastName" 
          class="form-control" />
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-6">
            Please select your gender:
          </legend>
          <div class="col-sm-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                value="female">
              <label 
                class="form-check-label" 
                for="female">
                  Female
              </label>
            </div>
            <div class="form-check">
              <input 
                class="form-check-input" 
                type="radio" 
                name="gridRadios" 
                value="male">
              <label 
                class="form-check-label" 
                for="male">
                  Male
              </label>
            </div>
            <div class="form-check">
              <input 
                class="form-check-input" 
                type="radio" 
                name="gridRadios" 
                value="no" 
                checked>
              <label 
                class="form-check-label" 
                for="uncertain"
                checked>
                  Uncertain ;)
              </label>
            </div>
          </div>
          </div>
        </fieldset>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" required>
          <label 
            class="form-check-label" 
            for="privacy">
            I agree to to the 
              <router-link to="/privacy">privacy policy</router-link>.
          </label>
      </div>
      <button 
        type="submit" 
        class="btn btn-primary">
          Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionForm',
  data() {
    return {
  
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.subscriptionForm {
  text-align: left;
  width: 40%;
  margin-right: auto;
  margin-left: auto;
}

button {
  background-color: #42b983;
  border: 0;
}

button:hover {
  background-color: #42b983;
  border: 0;
  text-decoration: underline;
}

button:focus {
  background-color: #42b983;
  border: 0;
  text-decoration: underline;
}
</style>