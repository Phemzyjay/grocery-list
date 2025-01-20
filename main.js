// Select DOM elements
const addItemInput = document.getElementById("additem");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("list");

// Function to check if an item already exists in the list
const isDuplicate = (item) => {
    const listItems = list.getElementsByTagName("li");
    for (const listItem of listItems) {
        if (listItem.textContent.replace("close", "").trim().toLowerCase() === item.toLowerCase()) {
            return true; // Duplicate found
        }
    }
    return false; // No duplicates
};

// Add Item Functionality
addButton.addEventListener("click", () => {
    const newItem = addItemInput.value.trim(); // Get the input value and trim whitespace

    if (newItem === "") {
        alert("Please enter an item!"); // Alert if input is empty
        return;
    }

    if (isDuplicate(newItem)) {
        alert(`The item "${newItem}" is already in the list!`); // Alert if item is a duplicate
        return;
    }

    // Create a new list item with a close button
    const li = document.createElement("li");
    li.innerHTML = `${newItem} <i class="material-icons close">close</i>`;
    list.appendChild(li); // Append the new item to the list

    addItemInput.value = ""; // Clear the input field
    addItemInput.focus(); // Refocus the input field
});

// Delete Item Functionality using Event Delegation
list.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
        const itemToRemove = event.target.parentElement; // Get the parent <li>
        list.removeChild(itemToRemove); // Remove the <li> from the list
    }
});

// Add 'Enter' Key Functionality for Input
addItemInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addButton.click(); // Trigger the Add button click event
    }
});
