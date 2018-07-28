
module.exports = {
    movieTemplate: posterUrl => `
    <div class="movie">
    <img class="moviePoster" src=${decodeURIComponent(posterUrl)}/>
</div>
    `
}