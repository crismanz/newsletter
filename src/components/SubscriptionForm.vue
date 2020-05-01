<template>
  <div class="subscriptionForm">
    <form id="form" @submit="formSubmit">
      <fieldset>
        <div class="form-group">
          <label>Email address *</label>
          <input 
            type="email"
            class="form-control"
            v-model="email"
            required 
            autofocus>
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label>First Name</label>
          <input 
            class="form-control"
            v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input 
            class="form-control" 
            v-model="lastName">
        </div>
          <div class="form-group">
            <select 
              v-model="gender" 
              required>
              <option disabled value="">Please select your gender</option>
              <option value="uncertain">Uncertain.. ;)</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div class="form-group form-check">
            <input 
              type="checkbox" 
              class="form-check-input" 
              v-model="privacy"
              :value="true"
              required>
            <label>
              I agree to the <router-link to="/privacy" target="_blank">privacy policy</router-link> *
            </label>
        </div>
      </fieldset>
      <button class="btn">Submit</button> <span/>
      <small class="form-text text-muted">
        * to subscripte to our Newsletter it is 
        mandatory to provide us your email address and agree to our 
          <router-link to="/privacy" target="_blank">privacy policy</router-link>
      </small>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionForm',
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      gender: '',
      privacy: '',
      output: ''
    }
  },
  methods: {
    formSubmit(e) {
      let btn = document.querySelector('button');
      let spin = document.querySelector('span')
      spin.classList.add('spinner-border');
      btn.disabled = true;
      btn.form.firstElementChild.disabled = true;
      
      e.preventDefault();
      let currentObj = this;
      this.axios.post('https://v2-api.sheety.co/7a912c42fc1f84a0b736a7db242ea7a4/newsletter/subscriptions', {
        subscription: {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          privacy: this.privacy
        }
      })
      .then(function (response) {
        spin.classList.remove('spinner-border');
        btn.disabled = false;
        btn.form.firstElementChild.disabled = false;
        form.reset();
        alert('Thank you for subscribing to our Newsletter!');
        window.location = '/';
      })
      .catch(function (error) {
        spin.classList.remove('spinner-border'); 
        btn.disabled = false;
        btn.form.firstElementChild.disabled = false;
        currentObj.output = error;
        alert(error + '\n\nSorry something went wrong. Please contact our support team.');
      })
    }
  }
}
</script>

<style scoped>
.subscriptionForm {
  text-align: left;
  width:60%;
  margin-right: auto;
  margin-left: auto;
}

button {
  background-color: #42b983;
  color: white;
  border: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 20px;
}

button:hover {
  background-color: #42b983;
  border: 0;
  color: white;
  text-decoration: underline;
}

button:focus {
  background-color: #42b983;
  border: 0;
  text-decoration: underline;
  box-shadow: none;
}

.spinner-border {
  color: #42b983;
}
</style>