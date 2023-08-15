<script setup>
import AreaDetail from 'components/AreaDetail.vue'

const nodes = [
    {
        label: 'TD-OP-0028 Tamale Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '28 - TAMALE  (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0028 Tamale Substation/28 - TAMALE  (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0028 Tamale Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0028 Tamale Substation/TD-OP-0028 Tamale Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0035 Yendi Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '35 - YENDI (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0035 Yendi Substation/35 - YENDI (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0035 Yendi Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0035 Yendi Substation/TD-OP-0035 Yendi Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0038 Sawla Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '38 - SAWLA SUBSTATION (Colour-2022-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0038 Sawla Substation/38 - SAWLA SUBSTATION (Colour-2022-Model.pdf'
            },
            {
                label: 'TD-OP-0038 Sawla Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0038 Sawla Substation/TD-OP-0038 Sawla Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0055 Buipe Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '55 - BUIPE (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0055 Buipe Substation/55 - BUIPE (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0055 Buipe Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0055 Buipe Substation/TD-OP-0055 Buipe Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0068 Wa Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '68 - WA (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0068 Wa Substation/68 - WA (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0068 Wa Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0068 Wa Substation/TD-OP-0068 Wa Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0081 Adubiyili (161kV) Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '81 - ADUBLIYILI SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0081 Adubiyili (161kV) Substation/81 - ADUBLIYILI SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0081 Adubiyili (161kV) Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0081 Adubiyili (161kV) Substation/TD-OP-0081 Adubiyili (161kV) Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0081 Adubiyili (330kV) Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '81 - ADUBLIYILI SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0081 Adubiyili (330kV) Substation/81 - ADUBLIYILI SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0081 Adubiyili (330kV) Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Tamale Area/TD-OP-0081 Adubiyili (330kV) Substation/TD-OP-0081 Adubiyili (330kV) Substation.pdf'
            }
        ]
    },
]
</script>

<template>
    <area-detail area="Tamale Area" :nodes="nodes" />
</template>

