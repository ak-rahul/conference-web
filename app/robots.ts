import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard/', '/admin/'],
        },
        sitemap: 'https://icar2025.org/sitemap.xml',
    }
}
