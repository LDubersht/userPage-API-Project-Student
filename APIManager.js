//This is the class that will manage all your APIs

class APIManager {
    constructor(URI){
        this._URIs = URI
    }

    // GetData(URI) {
    //     return $.get(URI)
    // }

    // GetDataPromise = function(URI) {
    //     return new Promise((resolve, reject) =>
    //         $.get(URI)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response
    //             }
    //             throw new Error('somethings wrong')
    //         })
    //         .then(data => resolve(data))
    //         )
    //         .catch(error => reject(error));
    // }

    

    // async loadData(URI) {
    //     let result = await axios.get(URI)
    // }

    async loadAllData() {
            let promises = []
            this._URIs.forEach((uri) => {
                promises.push(axios.get(uri))
            })
            return await Promise.all(promises)


    }


    // get results(){
    //     return this._results;
    //     console.log("this._results")
    // }

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



