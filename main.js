

var fbdata = new PageDataFS()

const render = new Renderer()

const reloadUser = function() {fbdata.loadData().then(response =>{
    render.RenderPage(fbdata)
})
}

reloadUser()
//onClick
$("#generate-user").on("click", function(){reloadUser()})

$("#save-user").on("click", function(){
    localStorage.setItem('user',JSON.stringify(fbdata.data))
    console.log(localStorage.getItem('user'))
})

$("#load-user").on("click", function(){
    console.log(localStorage.getItem('user'))
   
   fbdata.data = JSON.parse(localStorage.getItem('user'))
   render.RenderPage(fbdata)
})
