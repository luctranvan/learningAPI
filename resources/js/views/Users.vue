<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-5 col-sm-5">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control"  placeholder="Name" v-model="search.name">
                </div>
            </div>
            <div class="col-md-5 col-sm-5">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email">
                </div>
            </div>
            <div class="col-md-2 col-sm-2">
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 col-sm-5">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email">
                </div>
            </div>
            <div class="col-md-5 col-sm-5">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email">
                </div>
            </div>
            <div class="col-md-2 col-sm-2">
                <button class="btn btn-blue" @click="filterUsers">Search</button>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Name</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user, index) in users">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ user.email }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.birthday }}</td>
                    <td>
                        <button class="btn btn-blue" @click="handleEdit(index, user)">Edit</button>
                        <button class="btn btn-danger" @click="handleDelete(index, user)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            <paginate
                :page-count="total_page"
                :click-handler="getPaginateUsers"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'">
            </paginate>
        </div>
    </div>
</template>

<script>
import Paginate from 'vuejs-paginate'
import * as UserApi from '../api/user'

export default {
    name: 'users',
    components: {
        Paginate
    },
    data() {
        return {
            search: {},
            users: [],
            total_page: 0,
            page_size: 0,
            current_page: 0,
        }
    },
    methods: {
        filterUsers() {
            this.getUsers();
        },
        getPaginateUsers: function (pageNum) {
            this.current_page = pageNum;
            this.getUsers();
        },
        getUsers() {
            UserApi.fetchList({
                page: this.current_page,
                ... this.search
            }).then(res => {
                this.users = res.data.data.data;
                this.total_page = res.data.data.last_page;
                this.page_size = res.data.data.per_page;
            }).catch(err => {
                console.log(err);
            })
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    },
    mounted() {
        this.getUsers();
    }
}
</script>
