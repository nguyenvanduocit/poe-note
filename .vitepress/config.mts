import {defineConfig} from 'vitepress'
import {withPwa} from '@vite-pwa/vitepress'
import {withMermaid} from "vitepress-plugin-mermaid";

const themeColor = '#5f67ee'

function getBuildTime() {
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const formattedTime = date.toTimeString().split(' ')[0].slice(0, 5); // HH:MM
    return `${formattedDate} ${formattedTime}`;
}

const config = defineConfig({
    title: "Path Of Exile+",
    description: "Or a little bit more",
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    lang: 'vi-VN',
    sitemap: {
        hostname: 'https://poe.onepercent.plus'
    },
    ignoreDeadLinks: [
        '/parts'
    ],
    srcExclude: ['/parts/**/*.md'],
    head: [
        ['meta', {name: 'theme-color', content: themeColor}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:locale', content: 'vi_VN'}],
        ['meta', {name: 'og:site_name', content: 'OnePercent+'}],
        ['meta', {name: 'og:image', content: '/logo.png'}],
        ['link', {rel: 'icon', href: '/logo.png', type: 'image/png'}],
    ],
    themeConfig: {
        logo: {src: '/logo.png', width: 24, height: 24},
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Bài viết',
                link: '/articles/'
            }
        ],
        socialLinks: [
            {icon: 'twitter', link: 'https://twitter.com/onepercentplus'},
        ],
        editLink: {
            pattern: 'https://github.com/aiocean/onepercentplus/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'MIT License. ' + getBuildTime(),
            copyright: 'Copyright © 2019-present Henry Ng'
        },
    },
    markdown: {
        image: {
            lazyLoading: true
        },
        toc: {
            level: [1, 2]
        },
    },
    vite: {},
    pwa: {
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        manifest: {
            theme_color: themeColor,
            display: 'standalone',
            lang: 'vi-VN',
        }
    },
    mermaid: {

    },
})


export default withPwa(
    withMermaid(config)
)
