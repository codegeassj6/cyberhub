<template>
    <div>
        <div class="space-intro">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9">
                        <div class="d-flex justify-content-center mb-3" id="myId">
                            <label for="input_upload" class="pointer">
                            <div class="card border border-info">
                                <div class="m-auto p-10 bg-muted upload text-center">
                                    <input type="file" class="d-none" @change="inputFile($event)" id="input_upload" accept=".zip,.rar,.7zip">
                                    <i class="fa fa-upload fa-5x text-primary"></i>
                                    <div>Upload</div>
                                </div>
                            </div>
                            </label>
                        </div>

                        <div class="d-flex mb-4" v-if="isUploading">
                            <div class="progress flex-fill mt-2 me-4">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:0%">0%</div>
                            </div>
                            <div>
                                <button class="btn btn-sm btn-primary" @click="UploadFile">
                                    Upload
                                </button>
                                <button class="btn btn-danger btn-sm" @click="cancelUpload">
                                    <i class="fa fa-close"></i> Cancel
                                </button>
                            </div>
                        </div>


                        <SaveListing :saves="saves" />

                    </div>

                    <div class="col-md-3">
                        s
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import SaveListing from './templates/SaveListing.vue'

export default {
    data() {
        return {
            input_file: '',
            isUploading: false,
            saves: '',
        }
    },
    components: {
        SaveListing,
    },

    props: [],

    computed: {

    },

    methods: {
        inputFile(e) {
            this.input_file = e.target.files[0] || e.dataTransfer.files[0];
            this.isUploading = true;
        },

        UploadFile() {
            const formData = new FormData;
            formData.append('file', this.input_file);

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios.post(`/api/save/store`, formData, {
                headers: {
                    Authorization: AuthStr,
                },

            }).then(res => {
                this.isUploading = false;
                this.input_file = '';
                this.saves = res.data;
            }).catch(err => {

            });
        },

        cancelUpload() {
            this.isUploading = false;
        },

    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('watcher: ',val);
            },
            deep: true
        }
    },

    updated() {

    },

    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/save`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.saves = res.data;console.log(this.saves);
        }).catch(err => {

        });
    },
}
</script>

<style scoped>
.upload {
    height: 200px ;
    width: 450px;
}

@media (max-width: 768px) {
    .w-100 {
        width: 50% !important;
    }
}

.p-10 {
    padding: 50px;
}


</style>
