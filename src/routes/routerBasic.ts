export default {
  path: "/basic",
  name: "basic",
  component: () => import("@/views/Basic/index.vue"),
  children: [
    {
      path: "class&style",
      name: "class&style",
      component: () => import("@/views/Basic/Class&Style.vue")
    },
    {
      path: "computed&watch",
      name: "computed&watch",
      component: () => import("@/views/Basic/Computed&Watch.vue")
    },
    {
      path: "template",
      name: "template",
      component: () => import("@/views/Basic/Template.vue")
    },
    {
      path: "v-for",
      name: "v-for",
      component: () => import("@/views/Basic/V_For.vue")
    },
    {
      path: "v-if",
      name: "v-if",
      component: () => import("@/views/Basic/V_If.vue")
    },
    {
      path: "v-on",
      name: "v-on",
      component: () => import("@/views/Basic/V_On.vue")
    },
    {
      path: "v-model",
      name: "v-model",
      component: () => import("@/views/Basic/V_Model.vue")
    }
  ]
}