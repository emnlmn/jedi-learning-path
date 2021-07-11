import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-ba934fd8","/config/","Config",["/config/index.html","/config/README.md"]],
  ["v-a0d88510","/foundational/","Foundational Path",["/foundational/index.html","/foundational/README.md"]],
  ["v-fffb8e28","/guide/","Introduction",["/guide/index.html","/guide/README.md"]],
  ["v-79e93bb0","/guide/using-vue.html","Using Vue in Markdown",["/guide/using-vue.md"]],
  ["v-1b328856","/pragmatic/","Pragmatic path",["/pragmatic/index.html","/pragmatic/README.md"]],
  ["v-716721e8","/foundational/algorithms/introduction.html","Algoritmi",["/foundational/algorithms/introduction.md"]],
  ["v-65848a4a","/foundational/data-structures/introduction.html","Strutture dati",["/foundational/data-structures/introduction.md"]],
  ["v-1520dcc2","/foundational/functional-programming/functional-programming-in-typescript.html","Programmazione funzionale in typescript",["/foundational/functional-programming/functional-programming-in-typescript.md"]],
  ["v-aeeca4b0","/foundational/functional-programming/what-is-functional-programming.html","Cos'è la programmazione funzionale",["/foundational/functional-programming/what-is-functional-programming.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
