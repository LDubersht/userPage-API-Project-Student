

const fbdata = new PageDataFS()

const render = new Renderer()

const reloadUser = function() {fbdata.loadData().then(response =>{
    render.RenderPage(fbdata)
})
}

reloadUser()

$("#generate-user").on("click", function(){reloadUser()})

