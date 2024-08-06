import DefaultTheme from 'vitepress/theme'
import './style.styl'
import ArticleList from './components/ArticleList.vue'
import {App} from "@vue/runtime-core";
import ArticleSource from "./components/ArticleSource.vue";
import {h} from 'vue'

export default {
    extends: DefaultTheme,
    enhanceApp({app}: { app: App }) {
        app.component('ArticleList', ArticleList)
    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-footer-before': () => h(ArticleSource)
        })
    }
}
