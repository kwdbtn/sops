<script setup>
import AreaDetail from 'components/AreaDetail.vue'

const nodes = [
    {
        label: 'TD-OP-0005 Achimota Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '5 - ACHIMOTA SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0005  Achimota Substation/5 - ACHIMOTA SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0005  Achimota Substation',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0005  Achimota Substation/TD-OP-0005  Achimota Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0005  Winneba Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '6 - Winneba 2021 (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0006 Winneba Substation/6 - Winneba 2021 (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0006 Winneba Substation',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0006 Winneba Substation/TD-OP-0006 Winneba Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0037 Mallam (161kV) Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '37 - MALLAM SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0037 Mallam (161kV) Substation/37 - MALLAM SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0037 Mallam (161kV) Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0037 Mallam (161kV) Substation/TD-OP-0037 Mallam (161kV) Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0059 Accra East Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '59 - ACCRA EAST SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0059 Accra East Substation/59 - ACCRA EAST SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0059 Accra East Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0059 Accra East Substation/TD-OP-0059 Accra East Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0083 Accra Central Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '83 - ACCRA CENTRAL  (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0083 Accra Central Substation/83 - ACCRA CENTRAL  (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0083 Accra Central Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0083 Accra Central Substation/TD-OP-0083 Accra Central Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0086 Pokuase Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '86- POKUASI SUBSTATION (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0086 Pokuase Substation/86- POKUASI SUBSTATION (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0086 Pokuase Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0086 Pokuase Substation/TD-OP-0086 Pokuase Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0087 Kasoa Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '87-KASOA 2022 SLD-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0087 Kasoa Substation/87-KASOA 2022 SLD-Model.pdf'
            },
            {
                label: 'TD-OP-0087 Kasoa Substation ',
                header: 'child',
                icon: 'picture_as_pdf',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Accra Area/TD-OP-0087 Kasoa Substation/TD-OP-0087 Kasoa Substation.pdf'
            }
        ]
    },
]
</script>

<template>
    <area-detail area="Accra Area" :nodes="nodes" />
</template>