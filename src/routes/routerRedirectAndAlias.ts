export default {
  path: "/redirect_from",
  name: "redirect",
  redirect: '/redirect_to',
  component: () => import("@/views/redirect/Redirect.vue"),
  // children: [
  //   {
  //     path: "option",
  //     name: "option",
  //     component: () => import("@/components/form/Option.vue")
  //   }
  // ]
}