

const fbdata = new PageDataFS()

const render = new Renderer()

fbdata.loadData().then(response =>{
    render.RenderPage(fbdata)

})
// fbdata.CreateObjects()



