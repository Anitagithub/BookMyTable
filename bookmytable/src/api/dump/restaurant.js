const data = [
    {
        '_id': '1',
        'name': 'Kake da Dhabba',
        'rating': '2.2',
        'cuisine': 'North-Indian'
    },
    {
        '_id': '2',
        'name': 'Hatti Pyar Di',
        'rating': '2.2',
        'cuisine': 'North-Indian'
    },
    {
        '_id': '3',
        'name': 'Macchi Makkana',
        'rating': '2.2',
        'cuisine': 'Bengali'
    },
    {
        '_id': '4',
        'name': 'Amritsar Aao Ji',
        'rating': '2.2',
        'cuisine': 'North-Indian'
    },
    {
        '_id': '5',
        'name': 'Amma ki Rasoi',
        'rating': '2.2',
        'cuisine': 'South-Indian'
    },
    {
        '_id': '6',
        'name': 'Haweli: Aake Dekho',
        'rating': '2.2',
        'cuisine': 'Continental'
    },
    {
        '_id': '7',
        'name': 'Kerala Delight',
        'rating': '2.2',
        'cuisine': 'South-Indian'
    },
];

const headers = [
    {
        '_id': 'h1',
        'name': 'name',
        'label': 'Name'
    },
    {
        '_id': 'h2',
        'name': 'rating',
        'label': 'Rating'
    },
    {
        '_id': 'h3',
        'name': 'cuisine',
        'label': 'Cuisine'
    },
];

export const getRestaurants = () => {
    return data;
}

export const getHeaders = () => {
    return headers;
}