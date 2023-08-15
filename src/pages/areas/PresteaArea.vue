<script setup>
import AreaDetail from 'components/AreaDetail.vue'

const nodes = [
    {
        label: 'TD-OP-0009 Tarkwa Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '9 - Tarkwa Expansion(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0009 Tarkwa Substation/9 - Tarkwa Expansion(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0009 Tarkwa Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0009 Tarkwa Substation/TD-OP-0009 Tarkwa Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0010 Prestea Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '10A - PRESTEA SUBSTATION (161 KV)(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0010 Prestea Substation/10A - PRESTEA SUBSTATION (161 KV)(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0010 Prestea Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0010 Prestea Substation/TD-OP-0010 Prestea Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0030 Bogoso Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '30 - BOGOSU (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0030 Bogoso Substation/30 - BOGOSU (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0030 Bogoso Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0030 Bogoso Substation/TD-OP-0030 Bogosu Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0041 New Tarkwa Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '41 NEW TARKWA (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0041 New Tarkwa Substation/41 NEW TARKWA (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0041 New Tarkwa Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0041 New Tarkwa Substation/TD-OP-0041 New Tarkwa Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0042 Akyempim Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '42 - AKYEMPIM (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0042 Akyempim Substation/42 - AKYEMPIM (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0042 Akyempim Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Prestea Area/TD-OP-0042 Akyempim Substation/TD-OP-0042 Akyempim Substation.pdf'
            }
        ]
    },

]
</script>

<template>
    <area-detail area="Prestea Area" :nodes="nodes" />
</template>
