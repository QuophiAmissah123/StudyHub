// The codes for the Homepage
document.addEventListener("DOMContentLoaded", function () {
    // Search Bar Functionality (Placeholder for actual filtering)
    const searchBar = document.querySelector(".search-bar");
    searchBar.addEventListener("input", function () {
        const query = searchBar.value.toLowerCase();
        console.log("Searching for:", query);
        // Future: Filter resources based on search query
    });

    // Profile Image Click (Future: Dropdown menu or redirect)
    const profileImg = document.querySelector(".profile-img");
    profileImg.addEventListener("click", function () {
        alert("Profile menu will be implemented here!");
    });

    // Chat Button Click
    const chatButton = document.querySelector(".chat-button");
    chatButton.addEventListener("click", function () {
        alert("Opening chat feature soon!");
    });

    // Button Click Effects
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseleave", function () {
            button.style.transform = "scale(1)";
        });
        button.addEventListener("click", function () {
            alert(`You clicked: ${button.innerText}`);
        });
    });
});

// For the login page
