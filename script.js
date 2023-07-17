// Function to show the personal form
function showPersonalForm() {
    var reservationDay = document.getElementById("reservationDay").value;
    var smokingOption = document.getElementById("smokingOption").value;
    var numberOfPeople = document.getElementById("numberOfPeople").value;
    var reservationTime = document.getElementById("reservationTime").value;
    var specialRequests = document.getElementById("specialRequests").value;
  
    // Check if all required fields are filled
    if (reservationDay && smokingOption && numberOfPeople && reservationTime) {
      document.getElementById("reservationForm").style.display = "none";
      document.getElementById("personalForm").style.display = "block";
    } else {
      alert("Please fill in all the required fields.");
    }
  }
  
  // Function to handle the reservation submission
  function makeReservation() {
    var phoneNumber = document.getElementById("phoneNumberInput").value;
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.getElementById("gender").value;
  
    // Perform reservation logic here...
    // You can use the retrieved values to make an API call, store data in a database, etc.
  
    // Show the success message
    document.getElementById("personalForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
  }
  
  // Add event listener to the "Make Reservation" button
  var reservationButton = document.getElementById("reservationButton");
  reservationButton.addEventListener("click", makeReservation);
  
  // Set the minimum and maximum values for the reservation day field dynamically
  var today = new Date();
  var minDate = new Date(today.getTime() + 24 * 60 * 60 * 1000); // Tomorrow
  var maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days ahead
  
  var minDateString = minDate.toISOString().split("T")[0];
  var maxDateString = maxDate.toISOString().split("T")[0];
  
  document.getElementById("reservationDay").setAttribute("min", minDateString);
  document.getElementById("reservationDay").setAttribute("max", maxDateString);
  
  // Create the information element
  var infoMessage = "You can select a date within 7 days from today.";
  var infoElement = document.createElement("p");
  infoElement.textContent = infoMessage;
  infoElement.style.color = "#888";
  
  // Insert the information element after the "Reservation Day" field
  var reservationDayField = document.getElementById("reservationDay");
  reservationDayField.parentNode.insertBefore(infoElement, reservationDayField.nextSibling);
  
  // Update the date input to disable dates outside the 7-day range
  var dateInput = document.getElementById("reservationDay");
  dateInput.addEventListener("input", function() {
    var selectedDate = new Date(dateInput.value);
    if (selectedDate < minDate || selectedDate > maxDate) {
      dateInput.setCustomValidity("Please select a date within 7 days from today.");
    } else {
      dateInput.setCustomValidity("");
    }
  });
  