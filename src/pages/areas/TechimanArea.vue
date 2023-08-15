<script setup>
import AreaDetail from 'src/components/AreaDetail.vue';

const nodes = [
    {
        label: 'TD-OP-0026 Techiman Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '26 - TECHIMAN (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0026 Techiman Substation/26 - TECHIMAN (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0026 Techiman Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0026 Techiman Substation/TD-OP-0026 Techiman Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0027 Sunyani Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '27 - SUNYANI (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0027 Sunyani Substation/27 - SUNYANI (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0027 Sunyani Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0027 Sunyani Substation/TD-OP-0027 Sunyani Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0043 Kenyasi Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '43 - KENYASI(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0043 Kenyasi Substation/43 - KENYASI(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0043 Kenyasi Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0043 Kenyasi Substation/TD-OP-0043 Kenyasi Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0054 Bui Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '54 - BUI SUBSTATION + SOLAR PLANT(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0054 Bui Substation/54 - BUI SUBSTATION + SOLAR PLANT(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0054 Bui Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0054 Bui Substation/TD-OP-0054 Bui Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0056 Kintampo 161kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '56 - KINTAMPO SUBSTATION 161 (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0056 Kintampo 161kV Substation/56 - KINTAMPO SUBSTATION 161 (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0056 Kintampo 161kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0056 Kintampo 161kV Substation/TD-OP-0056 Kintampo 161kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0056 Kintampo 330kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '56 - KINTAMPO 161 kV and 330 kV(Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0056 Kintampo 330kV Substation/56 - KINTAMPO 161 kV and 330 kV(Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0056 Kintampo 330kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0056 Kintampo 330kV Substation/TD-OP-0056 Kintampo 330kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0062 Mim Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '62 -MIM (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0062 Mim Substation/62 -MIM (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0062 Mim Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0062 Mim Substation/TD-OP-0062 Mim Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0063 Berekum Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '63 - BEREKUM SUBSTATION(Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0063 Berekum Substation/63 - BEREKUM SUBSTATION(Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0063 Berekum Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'src/assets/Distribution/Techiman Area/TD-OP-0063 Berekum Substation/TD-OP-0063 Berekum Substation.pdf'
            }
        ]
    },

]
</script>

<template>
    <area-detail area="Techiman Area" :nodes="nodes" />
</template>

