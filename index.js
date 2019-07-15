

//code to add item to list
$('#js-shopping-list-form').on('submit', function(event) {

    // prevent form submission to remote server

    event.preventDefault()

    //create a variable that holds the input forms value

    const newItem = $('#shopping-list-entry').val()

    //append HTML to include the new list item
    
    $('.shopping-list').append(
        `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    )
})

//code to cross out completed list items

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    
    $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked")
    
})

//code to delete list items

$('.shopping-list').on('click', '.shopping-item-delete', function(event){

    $(this).closest('li').remove()

})

