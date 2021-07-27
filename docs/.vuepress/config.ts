import { path } from '@vuepress/utils'
import { DefaultThemeOptions, defineUserConfig } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    title: 'Programmer\'s path',

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: 'images/logo.png' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        navbar: [
            {
                text: 'Foundational',
                link: '/foundational/'
            },
            {
                text: 'Pragmatic',
                link: '/pragmatic/',
            },
        ],
        sidebar: {
            '/foundational/data-structures/': [
                {
                    text: 'Data Structures',
                    children: [
                        '/foundational/data-structures/introduction.md',
                    ],
                },
            ],
            '/foundational/functional-programming/': [
                {
                    text: 'Functional Programming',
                    children: [
                        '/foundational/functional-programming/what-is-functional-programming.md',
                        '/foundational/functional-programming/first-class-citzen-function.md',
                        '/foundational/functional-programming/immutability.md',
                        '/foundational/functional-programming/handling-side-effects.md',
                        '/foundational/functional-programming/functional-programming-in-typescript.md',
                        '/foundational/functional-programming/resources.md',
                        '/foundational/functional-programming/quiz.md',
                    ],
                },
            ],
            '/foundational/version-control-system/': [
                {
                    text: 'Version control system',
                    children: [
                        '/foundational/version-control-system/what-is-a-vcs.md',
                    ],
                },
            ],
        },
        sidebarDepth: 3
    },

    plugins: [
        [
            '@vuepress/plugin-register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Cerca',
                    },
                },
                hotKeys: ['s']
            },
        ],
    ]
})
