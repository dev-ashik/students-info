<template>
    <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-newstudents">Add New Students</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderPage',
    }
</script>



<style>
    .nav {
        background-color: #333;
        overflow: hidden;
    }

    .nav a {
        float: left;
        color: #f2f2f2;
        padding: 16px 14px;
        text-align: center;
        text-decoration: none;
        font-size: 17px;
        margin-right: 5px;
    }

    .nav a:hover {
        background-color: #ddd;
        color: #333;
    }
</style>