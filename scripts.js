```javascript
// Data Schemas
class Artist {
    constructor(name, bio, photo, socialLinks) {
        this.name = name;
        this.bio = bio;
        this.photo = photo;
        this.socialLinks = socialLinks;
    }
}

class Release {
    constructor(title, artist, coverArt, description, sampleLink) {
        this.title = title;
        this.artist = artist;
        this.coverArt = coverArt;
        this.description = description;
        this.sampleLink = sampleLink;
    }
}

class Event {
    constructor(name, date, location, details, image) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.details = details;
        this.image = image;
    }
}

// JavaScript Functions
function playSample(sampleLink) {
    let audio = new Audio(sampleLink);
    audio.play();
}

function showArtistDetails(artist) {
    let artistSection = document.getElementById('artists');
    artistSection.innerHTML = `
        <img src="${artist.photo}" alt="${artist.name}">
        <h2>${artist.name}</h2>
        <p>${artist.bio}</p>
        <a href="${artist.socialLinks}">Follow</a>
    `;
}

function showEventDetails(event) {
    let eventSection = document.getElementById('calendar');
    eventSection.innerHTML = `
        <img src="${event.image}" alt="${event.name}">
        <h2>${event.name}</h2>
        <p>${event.date} at ${event.location}</p>
        <a href="${event.details}">More Details</a>
    `;
}

function subscribe(email) {
    // Assuming a subscription API endpoint
    fetch('https://artintel.com/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Subscription successful!');
        } else {
            alert('Subscription failed. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
```