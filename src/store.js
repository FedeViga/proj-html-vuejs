import { reactive } from "vue";

export const store = reactive ({
    moviesList: [
        {
            title: 'Movie 1',
            posterImage: '/img/1-2.jpg',
            squareImage: '',
            rating: '3/10',
            views: '223',
            category: 'Top Rating',
            release: '15/01/2009',
            lenght: '2:30:00',
            genres: 'Drama, Action'
        },
        {
            title: 'Movie 2',
            posterImage: '/img/1.jpg',
            squareImage: '',
            rating: '7/10',
            views: '568',
            category: 'Coming Soon',
            release: '05/11/2021',
            lenght: '2:30:00',
            genres: 'Drama, Action'
        },
        {
            title: 'Movie 3',
            posterImage: '/img/2-1 (1).jpg',
            squareImage: '',
            rating: '8/10',
            views: '721',
            category: 'Latest Movie',
            release: '23/10/2023',
            lenght: '2:30:00',
            genres: 'Drama, Action'
        },
        {
            title: 'Movie 4',
            posterImage: '/img/2.jpg',
            squareImage: '',
            rating: '6/10',
            views: '844',
            category: 'Latest Movie',
            release: '11/06/2017',
            lenght: '2:30:00',
            genres: 'Drama, Action'
        },
        {
            title: 'Movie 5',
            posterImage: '/img/3 (1).jpg',
            squareImage: '',
            rating: '6/10',
            views: '244',
            category: 'Latest Movie',
            release: '24/04/2021',
            lenght: '2:30:00',
            genres: 'Drama, Action'
        },
        {
            title: 'Movie 6',
            posterImage: '/img/3-1.jpg',
            squareImage: '',
            rating: '7/10',
            views: '798',
            category: 'Top Rating',
            release: '05/11/2021',
            lenght: '2:30:00',
            genres: 'Drama, Action'
        },
    ],

    navLinks : [
        {
            name: 'Home',
            linkList: ['Home', 'Home 2', 'Home 3', 'Home 4', 'Home 5', 'Home 6']
        },
        {
            name: 'Celebrity',
            linkList: ['Celebrity', 'Celebrity 2', 'Celebrity 3']
        },
        {
            name: 'Movie',
            linkList: ['Movie', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5']
        },
        {
            name: 'Page',
            linkList: ['Page', 'Page 2', 'Page 3']
        },
        {
            name: 'Shop',
            linkList: ['Shop', 'Shop 2', 'Shop 3', 'Shop 4', 'Shop 5', 'Shop 6']
        },
        {
            name: 'Blog',
            linkList: ['Blog']
        },
        {
            name: 'Contact Us',
            linkList: ['Contact Us']
        },
    ],

    newsList: [
        {
            title: 'News 1',
            image: '/img/blog-570x570.jpg',
            date: '11/12/2023'
        },
        {
            title: 'News 2',
            image: '/img/blog2-570x570.jpg',
            date: '11/12/2023'
        },
        {
            title: 'News 3',
            image: '/img/blog3-570x570.jpg',
            date: '11/12/2023'
        },
        {
            title: 'News 4',
            image: '/img/blog4-570x570.jpg',
            date: '11/12/2023'
        },
        {
            title: 'News 5',
            image: '/img/blog5-570x570.jpg',
            date: '11/12/2023'
        },
    ],

    footerLinks: [
        {
            title: 'About Us',
            paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore repellendus accusantium aliquid reprehenderit natus nemo non facilis corrupti commodi voluptates, a deleniti quasi molestias ipsum adipisci id consequatur sequi cumque.',
            social: 'true'
        },
        {
            title: 'Movie Category',
            list: [
                'English New Movie',
                'Hindi All Movie',
                'Latest Tamil Movie',
                'New Top Rating Movie',
                'Homn New Movie',
                'Animation New Movie'
            ]
        },
        {
            title: 'Information',
            list: [
                'Youtube Video Post',
                'Actor Information',
                'New Promotion',
                'Latest Movie in English',
                'Latest Film Production',
                'Video New Video'
            ]
        },
        {
            title: 'Recent Post',
            news: 'true'
        }
    ]
})