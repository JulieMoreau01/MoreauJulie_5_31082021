function createPhotographe (name, id, city, country, tag, tagline, price, portrait) {

    return {
        name,
        id,
        city,
        country,
        tag,
        tagline,
        price,
        portrait
    }
}

const photographe1 = createPhotographe('Mimi Keel', '243', 'London', 'UK', 'tag', 'Voir le beau dans le quotidien', '400', 'MimiKeel.jpg')

console.log(photographe1);


