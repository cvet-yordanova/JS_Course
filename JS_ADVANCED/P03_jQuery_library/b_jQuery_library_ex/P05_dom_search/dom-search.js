
$(document).on('ready', domSearch);

function domSearch(selector, caseSensitive) {

    let content = $(selector);

    let addControlsDiv = $('<div>')
        .addClass('add-controls')
        .append($('<label>')
            .text('Enter text:')
            .append('<input>'))
        .append($('<a>')
            .addClass('button')
            .css('display', 'inline-block')
            .text('Add')
            .on('click', addItem));

    let searchControlsDiv = $('<div>')
        .addClass('search-controls')
        .append($('<label>')
            .text('Search')
            .append($('<input>')
                .on('input', updateResult)));

    let resultControls = $('<div>')
        .addClass('result-controls')
        .append($('<ul>')
            .addClass('items-list'));


    addControlsDiv.appendTo(content);
    searchControlsDiv.appendTo(content);
    resultControls.appendTo(content);



    function addItem(){
        console.log("check");
        let text = $('div.add-controls label input:first');

        let li = $('<li>')
            .addClass('list-item')
            .append($('<a>')
                .addClass('button')
                .text('X')
                .on('click', deleteItem))
            .append($('<strong>')
                .text(text.val()));

        $('ul.items-list').append(li);
        text.val('');
    }

    function deleteItem(){
        $(this).parent().remove();
    }

    function updateResult(){
        let list = $('.items-list').children();
        let searchText = $('div.search-controls label input:first').val();
        searchText = caseSensitive ? searchText : searchText.toLowerCase();
        let inputText;
        let listItemText;

        if(searchText.length === 0){
            $('.list-item').css('display', 'block');
        }else {
            for (let listItem of list) {
                listItemText = $(listItem).find('strong').text();
                listItemText = caseSensitive ? listItemText : listItemText.toLowerCase();

                if(listItemText.indexOf(searchText) === -1){
                    $(listItem).css('display', 'none');
                }else{
                    $(listItem).css('display', 'block');
                }
            }
        }

    }



}
