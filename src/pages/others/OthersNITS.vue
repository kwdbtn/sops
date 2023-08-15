<script setup>
// import AreaDetail from '../../components/AreaDetail'

const nodes = [
    {
        label: 'NITS Equipment Outage Planning Process',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '5 - ACHIMOTA SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Accra Area/TD-OP-0005  Achimota Substation/5 - ACHIMOTA SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0005  Achimota Substation',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Accra Area/TD-OP-0005  Achimota Substation/TD-OP-0005  Achimota Substation.pdf'
            }
        ]
    },
]
</script>

<template>
    <area-detail area="Accra Area" :nodes="nodes" />
</template>