const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/areas/accra",
        name: "areas.accra",
        component: () => import("pages/areas/AccraArea.vue"),
      },
      {
        path: "/areas/akosombo",
        name: "areas.akosombo",
        component: () => import("pages/areas/AkosomboArea.vue"),
      },
      {
        path: "/areas/bolga",
        name: "areas.bolga",
        component: () => import("pages/areas/BolgaArea.vue"),
      },
      {
        path: "/areas/kumasi",
        name: "areas.kumasi",
        component: () => import("pages/areas/KumasiArea.vue"),
      },
      {
        path: "/areas/prestea",
        name: "areas.prestea",
        component: () => import("pages/areas/PresteaArea.vue"),
      },
      {
        path: "/areas/takoradi",
        name: "areas.takoradi",
        component: () => import("pages/areas/TakoradiArea.vue"),
      },
      {
        path: "/areas/tamale",
        name: "areas.tamale",
        component: () => import("pages/areas/TamaleArea.vue"),
      },
      {
        path: "/areas/techiman",
        name: "areas.techiman",
        component: () => import("pages/areas/TechimanArea.vue"),
      },
      {
        path: "/areas/tema",
        name: "areas.tema",
        component: () => import("pages/areas/TemaArea.vue"),
      },
      {
        path: "/others/nits",
        name: "others.nits",
        component: () => import("pages/others/OthersNITS.vue"),
      },
      {
        path: "/others/srp",
        name: "others.srp",
        component: () => import("pages/others/OthersSRP.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
