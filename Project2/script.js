fetch("collection.json")
  .then((response) => response.json())
  .then((data) => {
    const collectionList = document.getElementById("collection-list");

    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.id = item.id;
      const itemInfo = `
        <p>
          Name: ${item.name} (${item.year}) <br>
          Location: ${item.location} <br>
          Type: ${item.type} <br>
          Companion: ${item.companion}
        </p>
      `;
      const itemImg = `<img src="${item.photo}.png">`;
      listItem.innerHTML = itemImg + itemInfo;
      collectionList.appendChild(listItem);
    });
  })
  .catch((error) => console.error(error));

const toggleOverflowButton = document.getElementById("toggle-overflow");
const collectionList = document.getElementById("collection-list");

toggleOverflowButton.addEventListener("click", () => {
  if (collectionList.style.overflowY === "scroll") {
    collectionList.style.overflowY = "visible";
    collectionList.style.height = "auto";
    collectionListlip.style.display = ""
  } else {
    collectionList.style.overflowY = "scroll";
    collectionList.style.height = "400px";
  }
});

function toggleVisibility() {
  var listItems = document.querySelectorAll('#collection-list li');
  
  listItems.forEach(function(item) {
    var img = item.querySelector('img');
    var p = item.querySelector('p');
    
    if (p.classList.contains('hide')) {
      p.classList.remove('hide');
      img.classList.add('hide');
    } else {
      p.classList.add('hide');
      img.classList.remove('hide');
    }
  });
};

const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const svgIcon = document.querySelector("#map");
const root = document.documentElement;

toggleThemeBtn.addEventListener("click", () => {
  if (root.style.getPropertyValue("--bg-color") === "#05386B") {
    root.style.setProperty("--bg-color", "#8D8741");
    root.style.setProperty("--text-color", "#FBEEC1");
    root.style.setProperty("--accent-color", "#659DBD");
  } else if (root.style.getPropertyValue("--bg-color") === "#8D8741") {
    root.style.setProperty("--bg-color", "#2E1114");
    root.style.setProperty("--text-color", "#ADADAD");
    root.style.setProperty("--accent-color", "#64485C");
  } else {
    root.style.setProperty("--bg-color", "#05386B");
    root.style.setProperty("--text-color", "#EDF5E1");
    root.style.setProperty("--accent-color", "#5CDB95");
  }
});
