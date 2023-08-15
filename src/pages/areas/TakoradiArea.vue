<script setup>
import AreaDetail from 'components/AreaDetail.vue'

const nodes = [
    {
        label: 'TD-OP-0007 Cape Coast Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '7 - CAPE COAST 2016 (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0007 Capecoast Substation/7 - CAPE COAST 2016 (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0007 Capecoast Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0007 Capecoast Substation/TD-OP-0007 Capecoast Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0008 Takoradi Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '8 - TAKORADI (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0008 Takoradi Substation/8 - TAKORADI (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0008 Takoradi Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0008 Takoradi Substation/TD-OP-0008 Takoradi Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0032 Takoradi Thermal 161kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '32 - Takoradi Thermal GS + AMERI GEN(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0032 Takoradi Thermal 161kV Substation/32 - Takoradi Thermal GS + AMERI GEN(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0032 Takoradi Thermal 161kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0032 Takoradi Thermal 161kV Substation/TD-OP-0032 Takoradi Thermal 161 kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0032 Takoradi Thermal 330kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '32 - Takoradi Thermal 330kV(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0032 Takoradi Thermal 330kV Substation/32 - Takoradi Thermal 330kV(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0032 Takoradi Thermal 330kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0032 Takoradi Thermal 330kV Substation/TD-OP-0032 Takoradi Thermal 330kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0034 Essiama Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '34- Esiama (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0034 Essiama Substation/34- Esiama (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0034 Essiama Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0034 Essiama Substation/TD-OP-0034 Essiama Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0036 Elubo Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '36 - ELUBO (Colour-2022)-Model.pdf REV1',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0036 Elubo Substation/36 - ELUBO (Colour-2022)-Model.pdf REV1.pdf'
            },
            {
                label: 'TD-OP-0036 Elubo Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0036 Elubo Substation/TD-OP-0036 Elubo Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0066 Takoradi Thermal Expansion Station',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '66 - Takoradi T3 (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0066 Takoradi Thermal Expansion Station/66 - Takoradi T3 (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0066 Takoradi Thermal Expansion Station ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0066 Takoradi Thermal Expansion Station/TD-OP-0066 Takoradi Thermal Expansion Station.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0066 Takoradi Thermal Expansion Station - M.E',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '66 - Takoradi T3 (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0066 Takoradi Thermal Expansion Station - M.E/66 - Takoradi T3 (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0066 Takoradi Thermal Expansion Station - M.E ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0066 Takoradi Thermal Expansion Station - M.E/TD-OP-0066 Takoradi Thermal Expansion Station - M.E.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0077 KARPOWER 330KV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '77 - KARPOWERSHIP(Colour-2019)v1-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0077 KARPOWER 330KV Substation/77 - KARPOWERSHIP(Colour-2019)v1-Model.pdf'
            },
            {
                label: 'TD-OP-0077 KARPOWER 330KV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0077 KARPOWER 330KV Substation/TD-OP-0077 KARPOWER 330KV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0079 AKSA 161kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '79 - AKSA (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0079 AKSA 161kV Substation/79 - AKSA (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0079 AKSA 161kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0079 AKSA 161kV Substation/TD-OP-0079 AKSA 161kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0084 Amandi 330KV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '84- AMANDI G.S(Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Takoradi Area/TD-OP-0084 Amandi 330KV Substation/84- AMANDI G.S(Colour-2022)-Model.pdf'
            }
        ]
    },
]
</script>

<template>
    <area-detail area="Takoradi Area" :nodes="nodes" />
</template>

