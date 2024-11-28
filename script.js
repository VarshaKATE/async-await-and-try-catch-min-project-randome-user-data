// Select elements
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const errorDisplay = document.getElementById("error");
const fetchUserButton = document.getElementById("fetchUser");

// Async function to fetch random user data
async function fetchRandomUser() {
  const apiUrl = "https://randomuser.me/api/";
  try {
    errorDisplay.textContent = ""; // Clear any previous error message
    const response = await fetch(apiUrl);

    // Handle non-200 responses
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const user = data.results[0];

    // Update the UI with fetched user data
    updateUserCard(user);
  } catch (error) {
    // Handle errors and display a message
    console.error("Error fetching user:", error);
    errorDisplay.textContent = "Failed to fetch user. Please try again.";
  }
}

// Function to update the user card with new data
function updateUserCard(user) {
  userImage.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
  userEmail.textContent = user.email;
}

// Event listener for the button
fetchUserButton.addEventListener("click", fetchRandomUser);

// Fetch a user on initial load
fetchRandomUser();
