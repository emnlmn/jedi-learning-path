const { description } = require('../../package')

module.exports = {
    title: 'Percorso del programmatore',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

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
                    text: 'Data Structured',
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
                        '/foundational/functional-programming/functional-programming-in-typescript.md'
                    ],
                },
            ],
        },
        sidebarDepth: 3
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
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
}
