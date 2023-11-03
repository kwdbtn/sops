<script setup>
import AreaDetail from 'src/components/AreaDetail.vue'

const nodes = [
    {
        label: 'System Restoration Procedures',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: 'System Restoration Procedures',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Other Procedures/System Restoration/System Restoration Procedures_July 12 (Without Synchrocheck).pdf'
            },
        ]
    },
]
</script>

<template>
    <area-detail area="System Restoration Procedures" :nodes="nodes" />
</template>