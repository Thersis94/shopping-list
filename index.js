$(document).ready(function(){
    console.log("doc is ready")

// code for creating a new list item
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault()
        console.log("item was submitted")

        const newItem = $(this).find(
            'input[name="shopping-list-entry"]').val()

            console.log(newItem)

            $(".shopping-list").append(
            $(`<li>
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                  <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button>
                  <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                  </button>
                </div>
              </li>`)
              )
    })
})
// code for cheeking off a list item
$('.shopping-list').on('click', function() {
$('.shopping-item-toggle').on('click', function(event){
    console.log("check was clicked")
    $(this).parents().eq(1).css("text-decoration", "line-through")
    console.log(this)
})
})
//code for deleting a list item

$('.shopping-list').on('click', function() {
$('.shopping-item-delete').on('click', function(event){
console.log("delete was clicked")
$(this).parents().eq(1).remove()


})
})