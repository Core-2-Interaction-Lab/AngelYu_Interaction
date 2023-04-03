
fetch('collection.json')
  .then(response => response.json())
  .then(data => {
    const collectionList = document.getElementById('collection-list');

    data.forEach(item => {
      const listItem = document.createElement('li');
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
  .catch(error => console.error(error));
