<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const menuList = [
  {
    icon: 'inbox',
    label: 'Dashboard',
    separator: true,
    url: '/'
  },
  {
    icon: 'category',
    label: 'Areas',
    separator: true,
    url: '/assets/index'
  },
  {
    icon: 'where_to_vote',
    label: 'Accra Area',
    separator: true,
    url: '/areas/accra'
  },
  {
    icon: 'where_to_vote',
    label: 'Akosombo Area',
    separator: true,
    url: '/areas/akosombo'
  },
  {
    icon: 'where_to_vote',
    label: 'Bolga Area',
    separator: true,
    url: '/areas/bolga'
  },
  {
    icon: 'where_to_vote',
    label: 'Kumasi Area',
    separator: true,
    url: '/areas/kumasi'
  },
  {
    icon: 'where_to_vote',
    label: 'Prestea Area',
    separator: true,
    url: '/areas/prestea'
  },
  {
    icon: 'where_to_vote',
    label: 'Takoradi Area',
    separator: true,
    url: '/areas/takoradi'
  },
  {
    icon: 'where_to_vote',
    label: 'Tamale Area',
    separator: true,
    url: '/areas/tamale'
  },
  {
    icon: 'where_to_vote',
    label: 'Techiman Area',
    separator: true,
    url: '/areas/techiman'
  },
  {
    icon: 'where_to_vote',
    label: 'Tema Area',
    separator: true,
    url: '/areas/tema'
  },
  {
    icon: 'fact_check',
    label: 'System Operating Procedures',
    separator: true,
    url: '/assets/available'
  },
  {
    icon: 'link',
    label: 'NITS Equipment Outage Planning Process',
    separator: true,
    url: '/others/nits'
  },
  {
    icon: 'restore_page',
    label: 'System Restoration Procedures',
    separator: true,
    url: '/others/srp'
  },
]
</script>

<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>SOPs</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="500" bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <q-scroll-area class="fit">
        <q-list bordered class="rounded-borders">
          <q-expansion-item expand-separator hide-expand-icon :icon="menuList[0].icon" :label="menuList[0].label" exact
            :to="menuList[0].url" default-opened />
          <q-expansion-item expand-separator :icon="menuList[1].icon" :label="menuList[1].label" default-opened>
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[2].icon"
              :label="menuList[2].label" exact :to="menuList[2].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[3].icon"
              :label="menuList[3].label" exact :to="menuList[3].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[4].icon"
              :label="menuList[4].label" exact :to="menuList[4].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[5].icon"
              :label="menuList[5].label" exact :to="menuList[5].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[6].icon"
              :label="menuList[6].label" exact :to="menuList[6].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[7].icon"
              :label="menuList[7].label" exact :to="menuList[7].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[8].icon"
              :label="menuList[8].label" exact :to="menuList[8].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[9].icon"
              :label="menuList[9].label" exact :to="menuList[9].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[10].icon"
              :label="menuList[10].label" exact :to="menuList[10].url" />
          </q-expansion-item>

          <q-expansion-item expand-separator :icon="menuList[11].icon" :label="menuList[11].label" default-opened>
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[12].icon"
              :label="menuList[12].label" exact :to="menuList[12].url" />
            <q-expansion-item :header-inset-level="1" expand-separator hide-expand-icon :icon="menuList[13].icon"
              :label="menuList[13].label" exact :to="menuList[13].url" />
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>