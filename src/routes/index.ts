import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import routerBasic from './routerBasic'
import routerNested from './routerNested'
import routerDynamic from './routerDynamic'
import routerComponent from './routerComponent' 
import routerNamedView from './routerNamedView' 
import routerRedirectAndAlias from './routerRedirectAndAlias' 

Vue.use(Router);
/* 
  通过 `this.$router` 访问路由器
  通过 `this.$route` 访问当前路由
  匹配优先级: 同一路径可以匹配多个路由，先定义的路由优先级最高
*/

/* 
  编程式导航:
    路由跳转: <router-link :to="...">         ===> this.$router.push(localtion, onComplete?, onAbort?)     
    路由替换: 不会向 history 添加新记录而是替换掉当前的记录。<router-link :to="..." replace> ===> this.$router.replace(localtion, onComplete?, onAbort?) 
    路由前进/后退: 在 history 记录中向前或者后退多少步。this.$router.go(n)                                                                       
    location:   路径
    onComplete: 导航成功完成 (在所有的异步钩子被解析之后) 的回调函数
    onAbort:    导航终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的回调函数
    // 字符串
    this.$router.push('home')

    // 对象，如果提供了 path，params 会被忽略  
    this.$router.push({ path: 'home' })

    // 命名的路由
    this.$router.push({ name: 'user', params: { userId: '123' }})

    // 带查询参数，变成 /register?plan=private
    this.$router.push({ path: 'register', query: { plan: 'private' }})
*/

/* 
  重定向: redirect  -->  当用户访问"/a", URL被替换成"/b", 匹配路由为"/b"
    {path: "/a", redirect: "/b"}          重定向到路径
    {path: "/a", redirect: {name: "b"}}   重定向到路由
    {path: "/a", redirect: (to) => {      动态的重定向
      // 参数 to 是目标路由
      // return 的值是重定向的路径
    }}
  
  别名:  alias    -->  "/a"的别名是"/b": 用户访问"/b"时, URL保持为"/b", 但路由匹配为"/a", 就好像"/a"有两个名字("/a" & "/b")  
*/
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home", // 命名路由
      component: Home
    },
    routerBasic,
    routerDynamic, // 动态路由
    routerNested, // 嵌套路由
    routerNamedView, // 命名视图
    routerComponent,
    routerRedirectAndAlias,
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    },
    {
      path: "/father",
      name: "father",
      component: () => import("@/views/prop/Father.vue")
    },
    {
      path: "/index/:userName",
      name: "index",
      component: () => import("@/views/Index.vue")
    },
    {
      path: "/carousel",
      name: "carousel",
      component: () => import("@/views/Carousel.vue")
    },
    
    {
      path: "/form/:ID",
      name: "form",
      component: () => import("@/views/Form.vue"),
      children: [         
        {
          path: "",
          component: () => import("@/views/Form.vue")
        },       
        {
          path: "option",
          name: "option",
          component: () => import("@/components/form/Option.vue")
        }
      ]
    },
    /* {
      path: "/socket",
      name: "socket",
      component: () => import("@/views/socket/socket.vue")
    } */
    {
      /* 
        通配符( * )可以匹配任意路径 例如 path: * || user-*
        需要注意路由的顺序, 含有通配符的路由应该放在最后
        通场用于客户端 404 错误
        this.$route.params.pathMatch 包含了 URL通过通配符被匹配的部分
        user-bul ---> this.$route.params.pathMatch // bul
        eroro    ---> this.$route.params.pathMatch // eroro
      */
      path: "*",
      name: 'error',
      component: () => import("@/views/Error.vue")
    },
  ]
});
