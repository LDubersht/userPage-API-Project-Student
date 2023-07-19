//This is the class that will manage all your APIs

class APIManager {

    
    GetData(URI) {
        return $.get(URI)
    }

   
    async loadAllData() {
            // read our JSON
            let promises = []
            this._URIs.forEach((uri) => {
                promises.push(axios.get(uri))
            })
            // let res = await axios.get(URI);
            // console.log(await Promise.all(promises))
            this._results = await Promise.all(promises)
            console.log("loadData")

            // func(this._results)
    }

    get results(){
        return this._results;
        console.log("this._results")
    }

}

    // fetch = function (MyURI,) {
    //     $.ajax({
    //         method: "GET",
    //         url: MyURI,
    //         success: function (response) {
    //             showData(response.data)
    
    //         },

    //         error: function (xhr, text, error) {
    //             console.log(text)
    //         }
    //     })



