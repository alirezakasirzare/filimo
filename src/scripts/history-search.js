// select history items
const historyItems = Array.from(document.querySelectorAll(".history-item"));
const inputSearch = document.getElementById("input-search");

// give event click to history items
historyItems.forEach((element) => {
  element.addEventListener("click", (event) => {
    // get text of history item and give to input search
    event.preventDefault();
    inputSearch.value = element.text;
  });
});
