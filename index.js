var listContainer = $('.list-container');
var submit = $('.submit-btn');

submit.on("click", createNewItem);

$('.list-container').on("click", ".delete-btn", deleteItem)

function createNewItem() {
  var item = $('.item').val();

  appendNewItem(item);
  clearInputs();
}

function appendNewItem(item) {
    listContainer.append(`
    <div class="item-card">
      <p>${item}</p>
      <button class="delete-btn">Delete</button>
    </div>
  `);
}

function clearInputs() {
  $('.item').val("");
}

function deleteItem(event) {
  event.target.parentNode.remove();
}
