const createCollectionHTML = (data) => {
  const collectGrid = document.getElementById("collection");

  data.forEach((item) => {
    console.log(item);
  });
};

fetch("collection.json")
  .then((response) => response.json)
  .then((data) => {
    createCollectionHTML(data);
  });

  const toggleOverflowButton = document.getElementById("toggle-overflow");
const collectionList = document.getElementById("collection-list");

toggleOverflowButton.addEventListener("click", () => {
  if (collectionList.style.overflowY === "scroll") {
    collectionList.style.overflowY = "visible";
    collectionList.style.height = "auto";
  } else {
    collectionList.style.overflowY = "scroll";
    collectionList.style.height = "400px";
  }
});
