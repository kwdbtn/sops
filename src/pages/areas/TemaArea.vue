<script setup>
import { ref } from 'vue'
import AreaDetail from 'components/AreaDetail.vue'

const nodes = ref([
    {
        label: 'TD-OP-0002 Volta 161 kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '2 - Volta 161 kV  (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0002 Volta 161 kV Substation/2 - Volta 161 kV  (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0002 Volta 161 kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0002 Volta 161 kV Substation/TD-OP-0002 Volta 161 kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0002 Volta 330 kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '2 - Volta  330 kV (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0002 Volta 330 kV Substation/2 - Volta  330 kV (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0002 Volta 330 kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0002 Volta 330 kV Substation/2 - Volta  330 kV.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0003  Smelter Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '3 - SMELTER SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0003  Smelter Substation/3 - SMELTER SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0003  Smelter Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0003  Smelter Substation/TD-OP-0003  Smelter Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0004 New Tema Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '4 - New Tema (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0004 New Tema Substation/4 - New Tema (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0004 New Tema Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0004 New Tema Substation/TD-OP-0004_New_Tema_Substation -M.E.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0033 Sogakope Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '33 - SOGAKOPE SUBSTATION (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0033 Sogakope Substation/33 - SOGAKOPE SUBSTATION (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0033 Sogakope Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0033 Sogakope Substation/TD-OP-0033 Sogakope Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0039 Aflao Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '39 - AFLAO (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0039 Aflao Substation/39 - AFLAO (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0039 Aflao Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0039 Aflao Substation/TD-OP-0039 Aflao Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0047  Cenit Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '47 - TP (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0047  Cenit Substation/47 - TP (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0047  Cenit Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0047  Cenit Substation/TD-OP-0047  Cenit Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0047 Tema Thermal Power Plant',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '47 - TP (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0047 Tema Thermal Power Plant/47 - TP (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0047 Tema Thermal Power Plant ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0047 Tema Thermal Power Plant/TD-OP-0047 Tema Thermal Power Plant.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0050 Siemens_Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '50 - ST (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0050 Siemens_Substation/50 - ST (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0050 Siemens_Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0050 Siemens_Substation/TD-OP-0050 Siemens_Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0051 Asogli 161 KV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '51 - ASOGLI 161kV (G.S) (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0051 Asogli 161 KV Substation/51 - ASOGLI 161kV (G.S) (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0051 Asogli 161 KV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0051 Asogli 161 KV Substation/TD-OP-0051 Asogli 161 KV Substation - M.E.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0051 Asogli 330KV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '51 - ASOGLI 330kV (G.S) (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0051 Asogli 330KV Substation/51 - ASOGLI 330kV (G.S) (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0051 Asogli 330KV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0051 Asogli 330KV Substation/TD-OP-0051 Asogli 330KV Substation - M.E.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0060 Smelter 2 Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '60 - SMELTER II SUBSTATION 2022 (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0060 Smelter 2 Substation/60 - SMELTER II SUBSTATION 2022 (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0060 Smelter 2 Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0060 Smelter 2 Substation/TD-OP-0060 Smelter 2 Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0067 Kpone 161kV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '67 - KTPP (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0067 Kpone 161kV Substation/67 - KTPP (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0067 Kpone 161kV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0067 Kpone 161kV Substation/TD-OP-0067 Kpone 161kV Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0071 Afienya (161kV) Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '71 -AFIENYA 2022  (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0071 Afienya (161kV) Substation/71 -AFIENYA 2022  (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0071 Afienya (161kV) Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0071 Afienya (161kV) Substation/TD-OP-0071 Afienya (161kV) Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0072 Free Zone Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '72 - Free-zone Enclave (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0072 Free Zone Substation/72 - Free-zone Enclave (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0072 Free Zone Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0072 Free Zone Substation/TD-OP-0072 Free Zone Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0074 Ameri 161 KV Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '74 - Ameri Power Plant (Colour-2022)',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0074 Ameri 161 KV Substation/74 - Ameri Power Plant (Colour-2022).pdf'
            },
            {
                label: 'TD-OP-0074 Ameri 161 KV Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0074 Ameri 161 KV Substation/TD-OP-0074 Ameri 161 KV Substation -M.E.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0075  Kpone Collector Station',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: 'TD-OP-0075  Kpone Collector Station',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0075  Kpone Collector Station/75 - KPONE COLLECTOR SUBSTATION (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0075  Kpone Collector Station ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0075  Kpone Collector Station/TD-OP-0075  Kpone Collector Station.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0076  Cenpower Station',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '76 - CENPOWER (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0076  Cenpower Station/76 - CENPOWER (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0076  Cenpower Station ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0076  Cenpower Station/TD-OP-0076  Cenpower Station.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0080 Dawa Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '80 - DAWA SUBSTATON (Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0080 Dawa Substation/80 - DAWA SUBSTATON (Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0080 Dawa Substation ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0080 Dawa Substation/TD-OP-0080 Dawa Substation.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0084 Amandi Station',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '84- AMANDI G.S(Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0084 Amandi Station/84- AMANDI G.S(Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0084 Amandi Station ',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0084 Amandi Station/TD-OP-0084 AMANDI GS.pdf'
            }
        ]
    },
    {
        label: 'TD-OP-0085 Bridge Power Plant Substation',
        icon: 'folder',
        header: 'parent',
        children: [
            {
                label: '85-Bridge Power Plant Update(Colour-2022)-Model',
                header: 'child',
                icon: 'image',
                type: 'Operating Drawing',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0085 Bridge Power Plant Substation/85-Bridge Power Plant Update(Colour-2022)-Model.pdf'
            },
            {
                label: 'TD-OP-0085 Bridge Power Plant Substation',
                header: 'child',
                icon: 'description',
                type: 'Operating Procedure',
                url: 'dist/spa/Distribution/Tema Area/TD-OP-0085 Bridge Power Plant Substation/TD-OP-0085 Bridge Power Plant Substation - M.E.pdf'
            }
        ]
    },
])

</script>

<template>
    <area-detail area="Tema Area" :nodes="nodes" />
</template>