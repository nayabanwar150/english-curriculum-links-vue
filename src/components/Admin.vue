<template>
  <div class="admin">
    <div class="container admin-form p-1">
      <!-- Header -->
      <div class="row">
        <div class="col">
          <h1 class="text-center text-white">Spoken English <i class="fa fa-volume-up" aria-hidden="true"></i></h1>
        </div>
      </div>
      <!-- Form -->
      <div class="row">
        <div class="col-sm-12 col-md-6 offset-md-3 mt-5 p-5 mb-5 admin-form">
          <AdminForm></AdminForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminForm from "./AdminForm";

export default {
  name: "Admin",
  components: {
    AdminForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-form {
  border-right: 3px solid #eee;
  border-bottom: 3px solid #eee;
  border-left: 3px solid #eee;
}

.admin-form h1{
  background-color: #000 !important;
  font-weight: 700;
  font-size: 30px;
  padding: 10px;
}
</style>
