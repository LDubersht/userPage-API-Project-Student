const showData = function(mainUser) {
    $(".user-container").empty()
    const source = $('#user-container-template').html();
    const template = Handlebars.compile(source);
    
    let newHTML = template(mainUser);
    $(".user-container").append(newHTML);

}

class RendererUser {

}