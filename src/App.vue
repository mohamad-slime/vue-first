<script>
  export default {
    data() {
      return {
        name: 'mohamad',
        status: 'active',
        tasks: ['task one', 'task two', 'task three', 'task four']
      }
    },
    methods: {
      changeStatus() {
        if (this.status == 'active') {
          this.status = 'inactive'
        } else if (this.status == 'inactive') {
          this.status = 'pending'
        } else {
          this.status = 'active'
        }
      }
    }

  }


</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status == 'active'">User is Active</p>
  <p v-else-if="status == 'pending'">User is Pending</p>
  <p v-else>User is Inactive</p>
  <br>
  <h3>tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}</li>
  </ul>
  <br>
  <button @click="changeStatus">Change Status</button>
</template>
