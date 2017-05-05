<template>
<div class="panel panel-default">
    <div class="panel-heading">Dashboard component</div>

    <div class="panel-body">
        Welcome to the dashboard ;)
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane fade in active" id="home">...</div>
          <div role="tabpanel" class="tab-pane fade" id="profile">
              <teapot-user-page></teapot-user-page>
          </div>
          <div role="tabpanel" class="tab-pane fade" id="messages">...</div>
          <div role="tabpanel" class="tab-pane fade" id="settings">
              <teapot-user-list></teapot-user-list>

          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        // console.log('Component mounted.');
    }
}
</script>
