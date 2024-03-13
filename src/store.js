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
        },
        {
            title: 'Movie 2',
            posterImage: '/img/1.jpg',
            squareImage: '',
            rating: '7/10',
            views: '568',
            category: 'Coming Soon',
        },
        {
            title: 'Movie 3',
            posterImage: '/img/2-1 (1).jpg',
            squareImage: '',
            rating: '8/10',
            views: '721',
            category: 'Latest Movie',
        },
        {
            title: 'Movie 4',
            posterImage: '/img/2.jpg',
            squareImage: '',
            rating: '6/10',
            views: '844',
            category: 'Latest Movie',
        },
        {
            title: 'Movie 5',
            posterImage: '/img/3 (1).jpg',
            squareImage: '',
            rating: '6/10',
            views: '244',
            category: 'Latest Movie',
        },
        {
            title: 'Movie 6',
            posterImage: '/img/3-1.jpg',
            squareImage: '',
            rating: '7/10',
            views: '798',
            category: 'Top Rating',
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
    ]
})