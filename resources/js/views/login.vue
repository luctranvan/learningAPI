<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control"
                                       name="email"
                                       autocomplete="email"
                                       v-model="model.email" autofocus>
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ errors.email }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password"
                                       class="form-control"
                                       name="password"
                                       autocomplete="current-password"
                                       v-model="model.password">
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ errors.password }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary" @click="onSubmit">
                                    Login
                                </button>
                                <a class="btn btn-link">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <p>Error output</p>
                            <pre>
                                {{ errors| json }}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login',
    metaInfo() {
        return {
            title: "「ログイン/Login」",
            meta: [
                {name: 'description', content: 'description'},
                {property: 'og:title', content: "「ログイン/Login」"},
                {property: 'og:type', content: 'website'},
                {name: 'robots', content: 'index,follow'}
            ]
        }
    },
    data() {
        return {
            model: {
                email: '',
                password: '',
            },
            errors: [],
            loading: false,
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('login', this.model).then(() => {
                this.loading = false
                this.$router.push({path: 'home'})
            }).catch((errors) => {
                this.errors = errors.response.data.errors
                this.loading = false
            })
        }
    }
}
</script>
