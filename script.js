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
        // alert("Profile menu will be implemented here!");
    });

    // Chat Button Click
    const chatButton = document.querySelector(".chat-button");
    chatButton.addEventListener("click", function () {
        // alert("Opening chat feature soon!");
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
            // alert(`You clicked: ${button.innerText}`);
        });
    });
});

// For the Discussion Page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const postsContainer = document.createElement("div");
    postsContainer.classList.add("posts-container");
    document.body.appendChild(postsContainer);

    // Load saved posts from localStorage
    loadPosts();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        if (title === "" || description === "") {
            alert("Please fill in both fields before submitting.");
            return;
        }

        const newPost = { title, description, timestamp: new Date().toLocaleString() };

        // Save to local storage
        savePost(newPost);

        // Display the new post
        displayPost(newPost);

        // Clear the input fields
        titleInput.value = "";
        descriptionInput.value = "";
    });

    function savePost(post) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
    }

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.forEach(displayPost);
    }

    function displayPost(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="preview">${post.description}</p>
            <p class="author"><strong>Posted on:</strong> ${post.timestamp}</p>
            <button class="delete-btn">❌ Delete</button>
        `;

        postsContainer.prepend(postElement);

        // Add delete functionality
        postElement.querySelector(".delete-btn").addEventListener("click", () => {
            deletePost(post);
            postElement.remove();
        });
    }

    function deletePost(postToDelete) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts = posts.filter(post => post.timestamp !== postToDelete.timestamp);
        localStorage.setItem("posts", JSON.stringify(posts));
    }
});

