<script setup>
import AreaDetail from 'src/components/AreaDetail.vue'

const nodes = [
    {
        label: 'System Restoration',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: 'System Restoration Procedures',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Other Procedures/System Restoration/System Restoration Procedures_Fred_Frank_1.pdf'
            },
        ]
    },
]
</script>

<template>
    <area-detail area="System Restoration" :nodes="nodes" />
</template>