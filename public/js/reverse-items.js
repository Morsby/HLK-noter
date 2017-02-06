$(function() {
    var list = $('#child-pages');
    var listItems = list.children('li');
    list.append(listItems.get().reverse());
});
