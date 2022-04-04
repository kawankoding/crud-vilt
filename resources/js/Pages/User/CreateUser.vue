<script setup>
import {useForm, Head} from "@inertiajs/inertia-vue3";

const form = useForm({
    name: '',
    email: '',
    password: ''
})
</script>

<template>
    <Head title="Create User"/>
    <div class="max-w-7xl m-auto mt-10">
        <form @submit.prevent="form.post('/user')">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Name</span>
                </label>
                <input type="text" v-model="form.name" name="name" placeholder="Amirul"
                       class="input input-bordered w-full max-w-xs">
                <span v-if="$page.props.errors.name">{{ $page.props.errors.name }}</span>
            </div>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input type="email" v-model="form.email" name="email" placeholder="amirul@kawankoding.com"
                       class="input input-bordered w-full max-w-xs">
                <span v-if="$page.props.errors.email">{{ $page.props.errors.email }}</span>
            </div>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Password</span>
                </label>
                <input type="password" v-model="form.password" name="password" placeholder="enter your password"
                       class="input input-bordered w-full max-w-xs">
                <span v-if="$page.props.errors.password">{{ $page.props.errors.password }}</span>
            </div>

            <input type="submit" value="Save" class="btn btn-success">
        </form>
    </div>
</template>
