export default {
  path: "/form",
  name: "form",
  component: () => import("@/views/Form.vue"),
  children: [
    {
      path: "option",
      name: "option",
      component: () => import("@/components/form/Option.vue")
    }
  ]
}