document.getElementById('search-button').addEventListener('click', () => {
    const pickupLocation = document.getElementById('pickup-location').value;
    const dropoffLocation = document.getElementById('dropoff-location').value;
    const pickupDate = document.getElementById('pickup-date').value;
    const returnDate = document.getElementById('return-date').value;
  
    if (pickupLocation && dropoffLocation && pickupDate && returnDate) {
      alert(`Searching cars from ${pickupLocation} to ${dropoffLocation} between ${pickupDate} and ${returnDate}.`);
    } else {
      alert('Please fill in all the fields.');
    }
  });
  