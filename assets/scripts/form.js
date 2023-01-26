

// makes a post request to dummy api 

$(function(){



$('form').on('submit', function(e){
e.preventDefault()

let dataString = $(this).serialize()

$.ajax({

    type: 'POST',
    url: 'https://dummyjson.com/products/add',
    data: dataString,
    success: function(){

        $('.form').html('<div id="message"></div>')

$('#message')
.html('<h2>Your message has been sent.</2>')
.hide()
.fadeIn(1500)


    }
})


})
    
})
