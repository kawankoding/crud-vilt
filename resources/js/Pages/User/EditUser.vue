<script setup>
import {useForm, Head} from "@inertiajs/inertia-vue3";

const props = defineProps({
    user: Object,
});

const form = useForm({
    name: props.user.name,
    email: props.user.email
})
</script>

<template>
    <Head title="Edit User"/>

    <div class="max-w-7xl m-auto mt-10">
        <form @submit.prevent="form.put(`/user/${user.id}`)">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Name</span>
                </label>
                <input type="text" v-model="form.name" name="name" placeholder="Amirul" class="input input-bordered w-full max-w-xs">
            </div>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input type="email" v-model="form.email" name="email" placeholder="amirul@kawankoding.com" class="input input-bordered w-full max-w-xs">
            </div>

            <input type="submit" value="Save" class="btn btn-success">
        </form>
    </div>
</template>
