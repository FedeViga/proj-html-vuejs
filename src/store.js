import { reactive } from "vue";

export const store = reactive ({
    moviesList: [
        {
            title: 'Movie 1',
            posterImage: '/img/1-2.jpg',
            squareImage: '',
            rating: '',
            views: '381',
            category: 'Top Rating',
        },
        {
            title: 'Movie 2',
            posterImage: '/img/1.jpg',
            squareImage: '',
            rating: '',
            views: '947',
            category: 'Coming Soon',
        },
        {
            title: 'Movie 3',
            posterImage: '/img/2-1 (1).jpg',
            squareImage: '',
            rating: '',
            views: '721',
            category: 'Latest Movie',
        },
        {
            title: 'Movie 4',
            posterImage: '/img/2.jpg',
            squareImage: '',
            rating: '',
            views: '',
            category: '',
        },
        {
            title: 'Movie 5',
            posterImage: '/img/3 (1).jpg',
            squareImage: '',
            rating: '',
            views: '',
            category: '',
        },
    ]
})