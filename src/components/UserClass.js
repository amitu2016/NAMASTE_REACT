import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name : "Dummy",
                location: "Default Location",
                avatar_url: ""
            }
        }
      //  console.log("Child Constructor")
    }

    async componentDidMount(){
       // console.log("Child Component Did Mount");
       const data = await fetch("https://api.github.com/users/amitu2016");
       const json = await data.json();
        this.setState({
            userInfo : json,
        });
       console.log(json);
    }

    render() {
      //  console.log("Child Render")
        const {name, location, avatar_url} = this.state.userInfo;


        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: amitu2016@gmail.com</h4>
            </div>
        );
    }

}

export default UserClass;