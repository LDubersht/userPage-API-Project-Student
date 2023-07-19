class PageDataFS {
    constructor(){
        this._APIList = [
            "https://randomuser.me/api/?results=7",
            "https://api.kanye.rest/",
            "https://pokeapi.co/api/v2/pokemon/499",
            "https://baconipsum.com/api/?type=meat-and-filler&paras=1"
          ]
        this._data
        this._mainUser
        this._users 
        this._quote = ""
        this._pokemon = {}
        this._about = {}
        
    }

    loadData(){
        const fbAPIManager = new APIManager(this._APIList)
        return fbAPIManager.loadAllData()
        .then(promiseResults => {
            let [users, quote, pokemon, about] = promiseResults

            this._data = {
                mainUser: users.data.results[0],
                users: users.data.results.slice(1),
                quote: quote.data,
                pokemon: pokemon.data,
                about: about.data[0]
              };
            this.CreateObjects()
         })
         .catch(err => {console.log("Error",err)});

    }
    
    CreateObjects(){
        this._mainUser = {
                    "pictureURI" : this._data.mainUser.picture.medium,
                    "first_name" : this._data.mainUser.name.first,
                    "last_name" : this._data.mainUser.name.last,
                    "city" : this._data.mainUser.location.city,
                    "state" : this._data.mainUser.location.state
        }

        this._users = this._data.users.map(item =>{
            return {"first_name": item.name.first,
             "last_name": item.name.last}
         });

         this._quote = this._data.quote
         this._about = {"about":this._data.about}

    }

    get mainUser(){
        return {...this._mainUser};
    }

    get users(){
        return [...this._users];
    }

    get about(){
        return {...this._about};
    }

    get pokemon(){
        return {...this._pokemon};
    }
    
    get quote(){
        return {...this._quote};
    }
}

