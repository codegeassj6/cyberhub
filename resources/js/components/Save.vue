<template>
    <div>
        <div class="space-intro">
            <div class="container">

                <div class="row">
                    <div class="col-md-2">
                        <div class="card shadow p-3">
                            <div class="m-auto p-5 border border-info upload text-center">
                                <input type="file" class="d-none" @change="inputFile($event)" id="input_upload" webkitdirectory directory multiple>
                                <label for="input_upload" class="pointer">
                                    <i class="fa fa-upload fa-5x text-primary"></i>
                                    <div>Upload</div>
                                </label>


                            </div>

                        </div>
                    </div>

                    <div class="col-md-8">

                        <ul class="list-group">
                            <li class="list-group-item">
                                <div class="d-flex">
                                    <div class="me-2 bg-outline-info">Minecraft</div>
                                    <div class="ms-auto">
                                        <span class="me-3">12/7/2022 9:00PM</span>
                                        <a href="#!" class="text-primary me-2"><i class="fa fa-download"></i> Download</a>
                                        <a href="#!" class="text-danger"><i class="fa fa-trash-o"></i> Delete</a>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </div>

                    <div class="col-md-2">
                        s
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
//import name from './

export default {
    data() {
        return {
            input_file: '',
        }
    },
    components: {

    },

    props: [],

    computed: {

    },

    methods: {
        uploadTriggerInput() {
            var elem = document.getElementById('input_upload');
            if(elem && document.createEvent) {
                var evt = document.createEvent("MouseEvents");
                evt.initEvent("click", true, false);
                elem.dispatchEvent(evt);
            }
        },

        inputFile(e) {
            // this.input_file = e.target.files[0] || e.dataTransfer.files[0];
            console.log(e.target.files);
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

    },
}
</script>

<style scoped>
.upload {
    height: 200px ;
}
</style>
