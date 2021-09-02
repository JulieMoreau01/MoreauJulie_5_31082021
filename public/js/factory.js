

/*fetch('https://juliemoreau01.github.io/MoreauJulie_5_31082021/public/js/FishEyeData.json')
    .then(res => {
        console.log(res);
        if(res.ok) {
            res.json().then(data => {
                const photographersName = data.photographers['0']['name']
                console.log(photographersName);
                const photographersPortrait = data.photographers['0']['portrait']
                console.log(photographersPortrait);
                const todo = createPhotographe(json);
            })
        } else {
            console.log("ERREUR");
            document.getElementById('testdatah1').innerHTML = "ERREUR"
        }
    })*/


    async function getPhotographers() {
        let url = 'https://juliemoreau01.github.io/MoreauJulie_5_31082021/public/js/FishEyeData.json';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function renderPhotographers() {
        let users = await getPhotographers();
        let html = '';
        let usersphotographers = users.photographers
        usersphotographers.forEach(photographers => {
            //let photographeId = `${photographers.id}`;
            let photographePortrait = `${photographers.portrait}`;
            let photographeName = `${photographers.name}`;
            let photographeCity = `${photographers.city}`;
            let photographeCountry = `${photographers.country}`;
            let photographeTagLine = `${photographers.tagline}`;
            let photographePrice = `${photographers.price}`;
            html += '<section>';
            //html += photographeId;
            html += '<figure><img src="public/images/photographers_id_photos/' + photographePortrait  +   ' " /></figure>';
            html += '<p class="photographer_name">' + photographeName + '</p>';
            html += '<p class="photographer_country">' + photographeCity + ' ' + photographeCountry + '</p>';
            html += '<p class="photographer_tagline">' + photographeTagLine + '</p>';
            html += '<p class="photographer_price">' + photographePrice + '€/jour' + '</p>';
            html += '</section>';
            
        });

    
        let container = document.getElementById('index');
        container.innerHTML = html;
    }
    
    renderPhotographers();


    



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

const photographe1 = createPhotographe('Mimi Keel', '243', 'London', 'UK', 'tag', 'Voir le beau dans le quotidien', '400', 'image')

console.log(photographe1);



//fetch('https://juliemoreau01.github.io/MoreauJulie_5_31082021/public/js/FishEyeData.json')
    //.then(res => res.json())
    //.then(data =>  testData.src = data.photographers['0']['portrait'])










