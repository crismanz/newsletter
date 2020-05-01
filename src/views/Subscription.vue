<template>
  <div class="subscription">
    <h1>Please fill out the form to subscripe for our Newsletter</h1>
    <SubscriptionForm />
  </div>
</template>

<script>
import SubscriptionForm from '@/components/SubscriptionForm.vue'

export default {
  name: 'Subscription',
  components: {
    SubscriptionForm
  }
}
</script>