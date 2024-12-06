document.getElementById('trackButton').addEventListener('click', function () {
    const trackingNumber = document.getElementById('trackingInput').value.trim();
    const trackingResult = document.getElementById('trackingResult');

    if (trackingNumber === '') {
        trackingResult.textContent = 'Please enter a valid tracking number.';
        trackingResult.style.color = 'red';
    } else {
        trackingResult.textContent = `Tracking information for ${trackingNumber}: Package in transit.`;
        trackingResult.style.color = 'green';
    }
});
