function searchRecipes() {
    const query = document.getElementById('recipe-query').value;
    const searchUrl = `https://www.allrecipes.com/search/?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
}



// Search for restaurants based on location

function searchRestaurant() {
    const zipcode = document.getElementById('zipcode').value;
    if (zipcode) {
        // Use Google Geocoding API to get latitude and longitude from zipcode
        const geocodeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyCGkDFRGKLkyK_V2BIqTsrp_BiD-8Eo1-8`;

        fetch(geocodeApiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'OK') {
                    const location = data.results[0].geometry.location;
                    updateMap(location.lat, location.lng);
                } else {
                    console.error('Geocoding failed:', data.status);
                }
            })
            .catch(error => {
                console.error('Error fetching geocode:', error);
            });
    } else {
        console.log("Please enter a valid zipcode.");
    }
}
function displayRestaurants(restaurants) {
    const container = document.getElementById('restaurant-results');
    container.innerHTML = ''; // Clear previous content
    restaurants.forEach(restaurant => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${restaurant.name}</h3><p>Address: ${restaurant.address}</p><p>Rating: ${restaurant.rating}</p>`;
        container.appendChild(div);
    });
}
function updateMap(latitude, longitude) {
    const mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 12
    };
    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        title: "Search Location"
    });
}
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('google-map')) {
        initMap();
    }
});


