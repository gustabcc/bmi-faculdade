document.addEventListener("DOMContentLoaded", function () {
  const historyList = document.getElementById("history-list");

  if (!historyList) {
    // If history-list element does not exist, this script should not run
    return;
  }

  // Clear the list to prevent duplicates
  historyList.innerHTML = "";

  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];

  if (history.length === 0) {
    historyList.innerHTML = "<li>No history available</li>";
  } else {
    history.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Date: ${result.date}, BMI: ${result.bmi}, Description: ${result.description}`;
      historyList.appendChild(listItem);
    });
  }
});
