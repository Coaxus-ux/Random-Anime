const url = "https://api.jikan.moe/v3";



fetch(`${url}/search/anime?q=&type=tv&limit=10&page=${getRandomIntQuery()}`)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            window.location.reload();
        }
    })
    .then(updateDom)
    .catch((err) => console.warn(err));

function updateDom(data) {
    const query = data.results[getRandomIntResults()]
    console.log(query)
    var fullYear = query.start_date;
    if (fullYear === null) {
        var year = "No found";
    } else {
        var year = fullYear.substr(0, 4);
    }
    const animeImg = document.querySelector(".img-anime");
    const animeName = document.querySelector(".name-date");
    const animeEpisodes = document.querySelector(".episodes");
    const score = document.querySelector(".score");
    const synopsis = document.querySelector(".synopsis");
    const rated = document.querySelector(".rated");

    animeImg.innerHTML = `
            <img class="img" src="${query.image_url}" alt="" >
        `;
    animeName.innerHTML = `
            <div class = "japanese-year">
                <h1>${query.title}</h1>
                <p>${year}</p>
            </div>
        `;
    animeEpisodes.innerHTML = `
            <h4>Episodes   ${query.episodes}</h4>
        `;
    score.innerHTML = `
            <h4>Score   ${query.score}</h4>
        `;
    synopsis.innerHTML = `
            <p>${query.synopsis}</p>
        `;
    rated.innerHTML = `
            <h4>rated   ${query.rated}</h4>
        `;

}
function getRandomIntQuery() {
    return Math.floor(Math.random() * (103 - 1)) + 1;
}
function getRandomIntResults() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
}


console.log(getRandomIntQuery())