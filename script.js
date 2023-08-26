let addBtn = document.getElementById('add-new');
let cut = document.getElementById('cut-mark');
let popup = document.getElementById('popup');
let container = document.querySelector('.container');
let submitBtn = document.getElementById('submitBtn');

let selectedGenre = document.getElementById('genre');
let selectedRating = document.getElementById('rating');

let selectedGenreText;
let iconClass;
selectedGenre.addEventListener('click', () => {

    selectedGenreText = (selectedGenre[selectedGenre.selectedIndex].text).toLowerCase();
    // console.log(selectedGenreText);

    // icons for the different genre
    let smile = document.getElementById('smile');
    if (selectedGenreText === 'comedy') {
        smile.classList.add('fa-face-smile');
        iconClass = 'fa-face-smile';
    }
    if (selectedGenreText === 'horror') {
        smile.classList.add('fa-ghost');
        iconClass = 'fa-ghost';

    }
    if (selectedGenreText === 'romance') {
        smile.classList.add('fa-heart');
        iconClass = 'fa-heart';

    }
    if (selectedGenreText === 'action') {
        smile.classList.add('fa-gun');
        iconClass = 'fa-gun';

    }
    if (selectedGenreText === 'drama') {
        smile.classList.add('fa-person-falling-burst');
        iconClass = 'fa-person-falling-burst';

    }
});


addBtn.addEventListener('click', () => {
    container.classList.toggle('active')
    popup.classList.toggle('popup')
    // cut.classList.toggle('cut-popup');
})

// close the form when clicked on the screen
document.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the clicked element is not within the form or the add button
    if (!popup.contains(target) && target !== addBtn) {
        container.classList.remove('active');
        popup.classList.remove('popup');
    }
});


// Taking input details from the form
let nameVal = document.getElementById('movieName')
let descVal = document.getElementById('description')

// Form submission
let btn = document.getElementById('submitBtn')
btn.addEventListener('click', e => {
    e.preventDefault();



    container.classList.toggle('active');
    popup.classList.toggle('popup');

    let movieName = nameVal.value;
    let description = descVal.value;
    let changeRatingToNumber = parseInt(selectedRating[selectedRating.selectedIndex].text);

    // console.log(selectedGenre[selectedGenre.selectedIndex].text)

    let uniqueMovieId = Date.now(); // Generate a unique ID using the current timestamp

    let string = `
    <div class="movie-details" id="movie-details-${uniqueMovieId}">
        <div class="delete-btn">
            <i class="fa-solid fa-trash fa-2x"></i>
        </div>
        
        <div class="smile-section">
            <i class="fa-solid ${iconClass} fa-5x"></i>
        </div>

        <div class="movie-credentials">
            <h2 class="name-credentials">${movieName}</h2>
            <h3 class="genre-credentials">${description}</h3>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <h5 class="desc-credentials" id="desc-credentials">${selectedGenre[selectedGenre.selectedIndex].text}</h5>
        </div>
    </div>
    `;

    let movieDetails = document.getElementById('movie-details-container');
    movieDetails.innerHTML += string;

    let spans = document.querySelectorAll(`#movie-details-${uniqueMovieId} .fa-star`);

    // Remove 'checked' class from all stars
    spans.forEach(span => {
        span.classList.remove('checked');
    });

    // Add 'checked' class to the specified number of stars
    for (let i = 0; i < changeRatingToNumber; i++) {
        spans[i].classList.add('checked');
    }

    // Clear input fields
    nameVal.value = "";
    descVal.value = "";
});

//Get all the navbar buttons to filter the genre
const anchorTags = document.querySelectorAll('a');

anchorTags.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        const searchKey = e.target.text;

        const movieDetails = document.querySelectorAll('.movie-details');
        movieDetails.forEach((movie) => {
            const movieDesc = document.getElementById('desc-credentials');
            const movieDescText = movieDesc.textContent.toLowerCase();

            console.log(searchKey.toLowerCase());
            console.log(movieDescText);



            if (movieDescText.includes(searchKey.toLowerCase())) {
                movie.style.display = 'block';
            }
            else {
                movie.style.display = 'none';
            }
        })
    })

});