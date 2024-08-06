import {createContentLoader} from 'vitepress'

export default createContentLoader('/articles/!(index).md', {
    includeSrc: true,
    transform(rawData) {
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).map((page) => {
            const title = page.src?.match(/#\s*(.*)/)?.[1]
            return {
                title: title,
                url: page.url,
                date: page.frontmatter.date,
            }
        })
    }
})
