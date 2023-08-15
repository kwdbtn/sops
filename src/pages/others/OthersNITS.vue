<script setup>
import AreaDetail from 'src/components/AreaDetail.vue'

const nodes = [
    {
        label: 'NITS Equipment Outage Planning Process',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: 'NITS Equipment Outage Planning Process',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Other Procedures/NITS/NITS Equipment Outage Planning Process (002).pdf'
            },
        ]
    },
]
</script>

<template>
    <area-detail area="Accra Area" :nodes="nodes" />
</template>