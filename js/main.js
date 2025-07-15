// Google Maps Integration
function initMap() {
    const kumbhanLocation = { lat: 21.0789, lng: 71.7665 }; // Update with actual coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: kumbhanLocation
    });
    new google.maps.Marker({
        position: kumbhanLocation,
        map: map,
        title: 'Kumbhan Village'
    });
}

// Temple Details Modal
function showTempleDetails(templeId) {
    const templeDetails = {


    }


    // Add other temple details
};

const temple = templeDetails[templeId];
if (!temple) return;

// Create and show modal with temple details
const modal = document.createElement('div');
modal.className = 'temple-modal';
modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>${temple.name}</h2>
            <div class="temple-gallery">
                ${temple.images.map(img => `<img src="${img}" alt="${temple.name}">`).join('')}
            </div>
            <p>${temple.description}</p>
            <div class="temple-info-grid">
                <div class="info-item">
                    <strong>Timings:</strong> ${temple.timings}
                </div>
                <div class="info-item">
                    <strong>Special Days:</strong> ${temple.specialDays}
                </div>
            </div>
        </div>
    `;
document.body.appendChild(modal);
