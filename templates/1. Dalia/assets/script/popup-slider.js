// Function to handle "next" arrow click
function showNext() {
  // Increment the current index
  currentIndex++;

  // Get the filtered food list
  const filteredFoodList = getFilteredFoodList();

  // Check if the index exceeds the length of the filtered food list
  if (currentIndex >= filteredFoodList.length) {
    currentIndex = 0; // Reset to the beginning
  }

  // Get the food item based on the current index
  const foodItem = filteredFoodList[currentIndex];

  // Update the popup content with the new food item details
  updatePopupContent(foodItem);
}

// Function to handle "prev" arrow click
function showPrev() {
  // Decrement the current index
  currentIndex--;

  // Get the filtered food list
  const filteredFoodList = getFilteredFoodList();

  // Check if the index is less than 0
  if (currentIndex < 0) {
    currentIndex = filteredFoodList.length - 1; // Wrap around to the end
  }

  // Get the food item based on the current index
  const foodItem = filteredFoodList[currentIndex];

  // Update the popup content with the new food item details
  updatePopupContent(foodItem);
}
