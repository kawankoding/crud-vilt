<script setup>
import {Link, Head} from '@inertiajs/inertia-vue3';

defineProps({
    users: Object,
})
</script>

<template>
    <Head title="List User"/>
    <div class="max-w-7xl m-auto mt-10">
        <div class="overflow-x-auto">
            <Link :href="route('user.create')" class="btn btn-primary">Create User</Link>
            <table class="table w-full">
                <!-- head -->
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr v-for="user in users">
                    <th>{{ user.id }}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <Link :href="route('user.edit', user.id)" class="btn btn-warning">Edit</Link>
                        <Link :href="route('user.destroy', user.id)" method="delete" class="btn btn-error">Delete</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
