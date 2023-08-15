<script setup>
import AreaDetail from 'components/AreaDetail.vue'

const nodes = [
    {
        label: 'TD-OP-0029 Bolga Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '29 - BOLGA (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0029 Bolga Substation/29 - BOLGA (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0029 Bolga Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0029 Bolga Substation/TD-OP-0029 Bolga Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0053 Zebila Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '53 - ZEBILLA (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0053 Zebila Substation/53 - ZEBILLA (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0053 Zebila Substation',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0053 Zebila Substation/TD-OP-0053 Zebila Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0069 Tumu Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '69 -TUMU (colour 2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0069 Tumu Substation/69 -TUMU (colour 2022).pdf'
            },
            {
                label: 'TD-OP-0069 Tumu Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0069 Tumu Substation/TD-OP-0069 Tumu Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0073 Bawku Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '73 - BAWKU 34.5 KV (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0073 Bawku Substation/73 - BAWKU 34.5 KV (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0073 Bawku Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0073 Bawku Substation/TD-OP-0073 Bawku Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0082 Nayagnia (161kV) Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '82 - NAYAGNIA SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0082 Nayagnia (161kV) Substation/82 - NAYAGNIA SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0082 Nayagnia (161kV) Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0082 Nayagnia (161kV) Substation/TD-OP-0082 Nayagnia (161kV) Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0082 Nayagnia (225kV) Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '82 - NAYAGNIA SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0082 Nayagnia (225kV) Substation/82 - NAYAGNIA SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0082 Nayagnia (225kV) Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0082 Nayagnia (225kV) Substation/TD-OP-0082 Nayagnia (225kV) Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0082 Nayagnia (330kV) Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '82 - NAYAGNIA SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0082 Nayagnia (330kV) Substation/82 - NAYAGNIA SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0082 Nayagnia (330kV) Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Bolga Area/TD-OP-0082 Nayagnia (330kV) Substation/TD-OP-0082 Nayagnia (330kV) Substation.pdf'
            }
        ]
    },
]
</script>

<template>
    <area-detail area="Bolga Area" :nodes="nodes" />
</template>

