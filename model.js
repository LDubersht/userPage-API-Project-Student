class PageDataFS {
    constructor(){
        //list API
        //<!--Key4 GIPHY:J5fIwY7xwp6LvRe4Sp9EKVZ5ts5G2gLh-->
//            "https://random-word-api.herokuapp.com/word"
        this._APIList = [
            "https://randomuser.me/api/?results=7",
            "https://api.kanye.rest/",
            "https://pokeapi.co/api/v2/pokemon/",
            "https://baconipsum.com/api/?type=meat-and-filler&paras=1",
            //"https://api.giphy.com/v1/gifs/random?api_key=J5fIwY7xwp6LvRe4Sp9EKVZ5ts5G2gLh"
            "https://api.giphy.com/v1/stickers/random?api_key=J5fIwY7xwp6LvRe4Sp9EKVZ5ts5G2gLh"
          ]
        //intermediate storage  
        this._data
        //objects
        this._mainUser
        this._users 
        this._quote = ""
        this._pokemon = {}
        this._about = {}
        
    }

    loadData(){
        let localAPI = [...this._APIList]
        localAPI[2] +=Math.floor(Math.random() * (949 + 1))
        //load
        const fbAPIManager = new APIManager(localAPI)
        return fbAPIManager.loadAllData()
        .then(promiseResults => {
            let [users, quote, pokemon, about,giphy] = promiseResults

            this._data = {
                mainUser: users.data.results[0],
                users: users.data.results.slice(1),
                quote: quote.data,
                pokemon: pokemon.data,
                about: about.data[0],
                giphyURI: giphy.data.data.images.original.url

              };
            this.CreateObjects()
         })
         .catch(err => {console.log("Error",err)});

    }
    //pass data from intermediate storage to target
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
         this._pokemon = {"name": this._data.pokemon.name, "imgURI": this._data.pokemon.sprites.other.home.front_default}
         this._giphyURI = {"giphyURI": this._data.giphyURI}
        }

    set data(data){
        this._data = data;
        this.CreateObjects()
    }

    get data(){
        return {...this._data};
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
    
    get giphyURI(){
        return {...this._giphyURI};
    }
}

