class PageDataFS {
    constructor(){
        this._APIList = [
            "https://randomuser.me/api/?results=1",
            "https://randomuser.me/api/?results=6"
          ]
        this._mainUserJS
        this._mainUser
        this._usersJS 
        this._bacon = {}
        this._pokemon = {}
        this._quote = ""

    }

    loadData(){
        const fbAPIManager = new APIManager()
        let initialDataPromise = fbAPIManager.GetData(this._APIList[0])
        initialDataPromise.then(function (data){
            this._mainUserJS = data.results[0]
            this._mainUser = new mainUser(this._mainUserJS)
            console.log(this._mainUserJS)
            console.log(this._mainUser)
        })


        // this._mainUser = new mainUser(this._mainUserJS)


        initialDataPromise = fbAPIManager.GetData(this._APIList[1])
        initialDataPromise.then(function (data){
            this._userJS = data.results
            console.log(this._userJS)
            // data.results[0].results.forEach(e =>{
            //     this._users.push(new user(e));
            // })

        })

        console.log("end")


    }

    _ApplyData(result){
        console.log(result)
        this._obj_res = result
        this._mainUser = new mainUser(result[0].data.results[0])

        //this._mainUser.addMainUser(new mainUser(result[0].data.results[0]));
        
        result[1].data.results.forEach(e =>{
            this._users.push(new user(e));
        })
    }

    addMainUser(mainuser){
        this._mainUser = mainuser
    }

    adduser(user){
        this._users.push(user);
    }

    get mainUser(){
        return this._mainUser;
    }

    get users(){
        return this._users;
    }

    get bacon(){
        return this._bacon;
    }

    get pokemon(){
        return this._pokemon;
    }
    
    get quote(){
        return this._quote;
    }
}


class mainUser {
    constructor(user){
        this._user = {
            //"pictureURI" : user.picture.medium,
            "first_name" : user.name.first,
            "last_name" : user.name.last,
            "city" : user.location.city,
            "state" : user.location.state
        }
    }

    get user(){
        return this._user;
    }

}


class user {
    constructor(user){
        this._first_name = user.name.first;
        this._last_name = user.name.last;
    }

    get first_name(){
        return this._first_name;
    }

    get last_name(){
        return this._last_name;
    }

}

class bacon {
    constructor(text){
        this._text = text
    }

    get text(){
        return this._text;
    }

}

class pokemon  {
    constractor(poke){
        this._image = poke.image
        this._name = poke.name
    }

    get name(){
        return this._name;
    }

    get image(){
        return this._image;
    }

}


class quote {
    constructor(text){
        this._text = text
    }

    get text(){
        return this._text;
    }

}







