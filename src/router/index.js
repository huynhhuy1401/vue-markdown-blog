import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddArticle from '../views/AddArticle.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ArticleEdit from '../views/ArticleEdit.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-article',
    name: 'new-article',
    component: AddArticle
  },
  {
    path: '/article/:id',
    name: 'article-detail',
    component: ArticleDetail,
    props: true
  },
  {
    path: '/article/edit/:id',
    name: 'article-edit',
    component: ArticleEdit,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router
