<script setup>
import AreaDetail from 'components/AreaDetail.vue'

const nodes = [
    {
        label: 'TD-OP-0001 Akosombo Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '1 - AKOSOMBO SUBSTATION (Colour-2022-Model)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0001 Akosombo Substation/1 - AKOSOMBO SUBSTATION (Colour-2022-Model.pdf'
            },
            {
                label: 'TD-OP-0001 Akosombo Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0001 Akosombo Substation/TD-OP-0001 Akosombo Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0014 Nkawkaw Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: 'TD-OP-0014 Nkawkaw Substation',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0014 Nkawkaw Substation/14 - NKAWKAW (2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0014 Nkawkaw Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0014 Nkawkaw Substation/TD-OP-0014 Nkawkaw Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0015 Tafo Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '15-TAFO SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0015 Tafo Substation/15-TAFO SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0015 Tafo Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0015 Tafo Substation/TD-OP-0015 Tafo Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0016 Akwatia Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '16 - AKWATIA SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0016 Akwatia Substation/16 - AKWATIA SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0016 Akwatia Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0016 Akwatia Substation/TD-OP-0016 Akwatia Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0017 Old Kpong GS',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '17 - Old Kpong + New Feeders(COLORS-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0017 Old Kpong GS/17 - Old Kpong + New Feeders(COLORS-2022).pdf'
            },
            {
                label: 'TD-OP-0017 Old Kpong GS ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0017 Old Kpong GS/TD-OP-0017 Kpong GS.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0019 Kpong GS',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '19 - Kpong GS(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0019 Kpong GS/19 - Kpong GS(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0019 Kpong GS ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0019 Kpong GS/TD-OP-0019 Kpong GS Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0022 Aseipke Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '22 - Asiekpe(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0022 Aseipke Substation/22 - Asiekpe(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0022 Aseipke Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0022 Aseipke Substation/TD-OP-0022 Aseipke Substation.pdf'
            }
        ]
    },

    {
        label: 'TD-OP-0023 Ho Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '23-HO SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0023 Ho Substation/23-HO SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0023 Ho Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0023 Ho Substation/TD-OP-0023 Ho Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0024 Kpeve Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '24 - KPEVE (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0024 Kpeve Substation/24 - KPEVE (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0024 Kpeve Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0024 Kpeve Substation/TD-OP-0024 Kpeve Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0025 Kpandu Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '25 - KPANDU (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0025 Kpandu Substation/25 - KPANDU (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0025 Kpandu Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0025 Kpandu Substation/TD-OP-0025 Kpandu Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0061 New Abirem Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '61 - NEW ABIREM(2022)-Model)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0061 New Abirem Substation/61 - NEW ABIREM(2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0061 New Abirem Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0061 New Abirem Substation/TD-OP-0061 New Abirem Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0070 Kedjebi Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '70 - KADJEBI (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0070 Kedjebi Substation/70 - KADJEBI (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0070 Kedjebi Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Akosombo Area/TD-OP-0070 Kedjebi Substation/TD-OP-0070 Kedjebi Substation.pdf'
            }
        ]
    },
]
</script>

<template>
    <area-detail area="Akosombo Area" :nodes="nodes" />
</template>

