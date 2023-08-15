<script setup>
import { ref } from 'vue'
import VuePdfApp from "vue3-pdf-app"
import "vue3-pdf-app/dist/icons/main.css"

defineProps({
    nodes: Object,
    area: String
})

const splitterModel = ref(30)
const pdfFile = ref()

// pdfviewer toolbar configurations
const config = {
    // sidebar: false,
    toolbar: {
        toolbarViewerRight: {
            presentationMode: true,
            openFile: false,
            print: true,
            download: true,
            viewBookmark: false,
        }
    }
}

const clicker = (url) => {
    pdfFile.value = url
}
</script>

<template>
    <q-card class="my-card">
        <q-card-section>
            <div class="q-pa-md q-gutter-sm" style="height: 80vh">

                <span class="q-pa-md text-h6" text-color="teal"><q-icon name="pin_drop" /> {{ area }}</span>

                <q-splitter v-model="splitterModel" separator-class="bg-blue" separator-style="width: 2px"
                    style="height: 70vh" :limits="[25, 80]">

                    <template v-slot:before>
                        <div class="q-pr-md">
                            <div style="max-width: 70vh">
                                <q-list>
                                    <div v-for="node in nodes" :key="node.label">
                                        <q-expansion-item popup>
                                            <template v-slot:header>
                                                <q-item-section avatar>
                                                    <q-avatar icon="folder" color="orange" text-color="white" />
                                                </q-item-section>

                                                <q-item-section>
                                                    {{ node.label }}
                                                </q-item-section>
                                            </template>

                                            <q-separator />

                                            <q-card>
                                                <q-card-section>
                                                    <div v-for="child in node.children" :key="child.label">
                                                        <q-expansion-item :header-inset-level="1" expand-separator
                                                            :icon="child.icon" :label="child.type" hide-expand-icon
                                                            @click="clicker(child.url)" />
                                                    </div>
                                                </q-card-section>
                                            </q-card>
                                        </q-expansion-item>
                                    </div>
                                </q-list>
                            </div>
                        </div>
                    </template>

                    <template v-slot:separator>
                        <q-avatar color="primary" text-color="white" size="30px" icon="drag_indicator" />
                    </template>

                    <template v-slot:after>
                        <div class="q-pl-md">
                            <vue-pdf-app style="height: 100vh;" :pdf="pdfFile" theme="dark" page-scale="page-fit"
                                :config="config" />
                        </div>
                    </template>

                </q-splitter>
            </div>
        </q-card-section>
    </q-card>
</template>