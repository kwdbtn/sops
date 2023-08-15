<script setup>
import AreaDetail from 'components/AreaDetail.vue'

const nodes = [
    {
        label: 'TD-OP-0011 Dunkaw Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '11-DUNKWA 2022  (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0011 Dunkaw Substation/11-DUNKWA 2022  (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0011 Dunkaw Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0011 Dunkaw Substation/TD-OP-0011 Dunkaw Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0012 Obuasi Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '12 - OBUASI (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0012 Obuasi Substation/12 - OBUASI (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0012 Obuasi Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0012 Obuasi Substation/TD-OP-0012 Obuasi Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0013 Kumasi Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '13 - KUMASI SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0013 Kumasi Substation/13 - KUMASI SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0013 Kumasi Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0013 Kumasi Substation/TD-OP-0013 Kumasi Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0018 Konongo Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '18 -KONONGO 2022  (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0018 Konongo Substation/18 -KONONGO 2022  (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0018 Konongo Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0018 Konongo Substation/TD-OP-0018 Konongo Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0020 Asawinso Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: 'TD-OP-0020 Asawinso Substation',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0020 Asawinso Substation/20 - ASAWINSO (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0020 Asawinso Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0020 Asawinso Substation/TD-OP-0020 Asawinso Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0021 New Obuasi Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '21 - NEW OBUASI (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0021 New Obuasi Substation/21 - NEW OBUASI (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0021 New Obuasi Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0021 New Obuasi Substation/TD-OP-0021 New Obuasi Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0057 Ayanfuri Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '57- AYANFURI (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0057 Ayanfuri Substation/57- AYANFURI (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0057 Ayanfuri Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0057 Ayanfuri Substation/TD-OP-0057 Ayanfuri Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0058 Anwomaso 161kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '58 - ANWOMASO (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0058 Anwomaso 161kV Substation/58 - ANWOMASO (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0058 Anwomaso 161kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0058 Anwomaso 161kV Substation/TD-OP-0058 Anwomaso 161kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0058 Anwomaso 330kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: 'TD-OP-0058 Anwomaso 330kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0058 Anwomaso 330kV Substation/TD-OP-0058 Anwomaso 330kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0064 Juabeso Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '64 - JUABESO (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0064 Juabeso Substation/64 - JUABESO (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0064 Juabeso Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0064 Juabeso Substation/TD-OP-0064 Juabeso Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0078 Obotan Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '78 - OBOTAN (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0078 Obotan Substation/78 - OBOTAN (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0078 Obotan Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Kumasi Area/TD-OP-0078 Obotan Substation/TD-OP-0078 Obotan Substation.pdf'
            }
        ]
    },
]
</script>

<template>
    <area-detail area="Kumasi Area" :nodes="nodes" />
</template>