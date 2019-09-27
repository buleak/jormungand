import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/father",
      name: "father",
      component: () => import("./views/prop/Father.vue")
    },
    {
      path: "/index/:userName",
      name: "index",
      component: () => import("./views/Index.vue")
    },
    {
      path: "/carousel",
      name: "carousel",
      component: () => import("./views/Carousel.vue")
    },
    {
      path: "/basic",
      name: "basic",
      component: () => import("./views/Basic.vue"),
      children: [
        {
          path: "layout",
          name: "layout",
          component: () => import("./components/basic/Layout.vue")
        },
        {
          path: "container",
          name: "container",
          component: () => import("./components/basic/Container.vue")
        }
      ]
    },
    {
      path: "/form",
      name: "form",
      component: () => import("./views/Form.vue"),
      children: [
        {
          path: "option",
          name: "option",
          component: () => import("./components/form/Option.vue")
        }
      ]
    },
    /* {
      path: "/socket",
      name: "socket",
      component: () => import("./views/socket/socket.vue")
    } */
  ]
});
