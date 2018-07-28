const movies = require('../config/dataBase');

const moviePlaceholder = '{{replace-me}}';

const movieTemplate = require('../config/templates').movieTemplate;

const movieDetailTemplate = `<div class="content">
<img src="{{Your movie poster URL}}" alt=""/>
<h3>Title  {{movieTitle}}</h3>
<h3>Year {{movieYear}}</h3>
<p> {{movieDescription}}</p>
</div>
`;

const errorMessage = `<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>`;
const successMessage = `<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>`;

module.exports = (req, res) => {
    let pathname = req.urlData.pathname;

    if (pathname === '/movies/all') {

        switch (req.method) {
            case 'GET':
                let moviesHtml = movies
                    .map(m => movieTemplate(m.moviePoster))
                    .join('');

                return res.view('views/viewAll.html', moviesHtml);
            case 'POST':
                return;
        }

    } else if (pathname === '/movies/add') {

        switch (req.method) {
            case 'GET':
                return res.view('views/addMovie.html');

            case 'POST':

                let movieData = req.bodyData;

                if (!movieData.moviePoster || !movieData.movieTitle) {
                    res.view('views/addMovie.html', errorMessage);
                    return;
                }


                return movies.push(movieData);
                res.view('views/addMovie.html', successMessage);
        }

    } else if (pathname.startsWith('/movies/details/')) {

        switch (req.method) {
            case 'GET':
                let idx = pathname.substr(pathname.lastIndexOf('/') + 1);
                let movie = movies[idx];

                let detailTemplate = movieDetailTemplate.replace('{{Your movie poster URL}}', decodeURIComponent(movie.moviePoster))
                    .replace('{{movieTitle}}', movie.movieTitle)
                    .replace('{{movieYear}}', movie.movieYear)
                    .replace('{{movieDescription}}', movie.movieDescription);

                return res.view('views/details.html', detailTemplate);

            case 'POST':

                return;
        }

    } else {
        return true;
    }
}