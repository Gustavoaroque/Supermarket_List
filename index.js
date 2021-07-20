var click_times = 0
function createNewItem(){
    //Get the content of the input
    var input_name = document.querySelector('#new_item')

    //Create element div
    var newDiv = document.createElement('div')
    //Create element span for the article name
    var item_label = document.createElement('h3')
    //Create a text for the article
    var text = document.createTextNode(input_name.value)
    //Create the input for the Amount
    var amount_input = document.createElement('input')
    //Create the input for the price  
    var price_input = document.createElement('input')
    //Create an input if you want to delete an item
    var delete_input =  document.createElement('input')


    //Create a const named list_container that is related to the item list container
    const list_container = document.querySelector('.item_list_container')
    //Create the div for each item
    list_container.appendChild(newDiv)
    //in the div create a label with the name of the item
    newDiv.appendChild(item_label)
    newDiv.setAttribute("id","div_"+click_times)
    newDiv.setAttribute("class","div_items")
    //add a value to the label
    item_label.appendChild(text)

    //Add the amount_input
    newDiv.appendChild(amount_input)
    amount_input.setAttribute("class","amount_input")
    amount_input.setAttribute("id","amount_"+input_name.value)
    amount_input.setAttribute("placeholder","Amount")
    amount_input.setAttribute("type","number")
    //Add the price_input
    newDiv.appendChild(price_input)
    price_input.setAttribute("class","price_input")
    price_input.setAttribute("id","price_"+input_name.value)
    price_input.setAttribute("placeholder","Price")
    price_input.setAttribute("type","number")
    
    //Add the delete_input
    newDiv.appendChild(delete_input)
    delete_input.setAttribute("class","delete_input")
    delete_input.setAttribute("id","delete_input")
    delete_input.setAttribute("type","button")
    delete_input.setAttribute("value","Delete")
    var att = document.createAttribute("onClick")
    att.value = "delete_item('div_"+click_times+"')";
    delete_input.setAttributeNode(att)

    // delete_input.setAttribute("value","Delete")
    
    click_times= click_times + 1
    height_t = click_times*65

    
    list_container.style.height = ''+ height_t + 'px';
}

function delete_item(element_del){
    var element_to_delete = '#'+element_del;
    const list_container = document.querySelector('.item_list_container')
    const child = document.querySelector(element_to_delete)
    list_container.removeChild(child)
    console.log(child)
    
}

