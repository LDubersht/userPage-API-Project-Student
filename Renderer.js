
class Renderer {
    RenderPage(data){
        $(".user-container").empty()
        let source = $('#user-container-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(data.mainUser);
        $(".user-container").append(newHTML);

        let friends = {friends:data.users}
        $(".friends-container").empty()
        source = $('#friends-container-template').html();
        template = Handlebars.compile(source);
        newHTML = template(friends);
        $(".friends-container").append(newHTML);

        $(".quote-container").empty()
        source = $('#quote-container-template').html();
        template = Handlebars.compile(source);
        newHTML = template(data.quote);
        $(".quote-container").append(newHTML);

        $(".meat-container").empty()
        source = $('#meat-container-template').html();
        template = Handlebars.compile(source);
        newHTML = template(data.about);
        $(".meat-container").append(newHTML);
    }

}