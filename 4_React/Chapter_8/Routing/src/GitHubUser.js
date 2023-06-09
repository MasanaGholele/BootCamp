import React, { Component } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useParams } from "react-router-dom";



// GitHubUser Component that shows the details of a particular user. In our case, we will
// just show the login and id of the user.

class GitHubUser extends Component {

    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(e) {
    //     this.props.history.push("/github");
    // }

    render() {
        // new code
        const { id, login } = this.props.params;
        return (
            <div>
                {/* show the login and id of the user. */}
                <h1>User Login: {login}</h1>
                <h2>User Id: {id}</h2>
                <Nav.Link href="/github"> 
                {/* redirect a user to another page upon clicking submit button instead of a Nav.Link*/}
                <Button variant="primary" >Go to GitHub Users</Button>
                </Nav.Link>
            </div>
        );
    }
}

export default (props) => (
    < GitHubUser
        {...props}
        params={useParams()}
    />
);


// import React, { Component } from 'react';
// class GitHubUser extends Component {

//     constructor(props) {
//         console.log("&&&&&&&&&&in GitHubUser");
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>User Login: {this.props.match.params.login}</h1>
//                 <h2>User Id: {this.props.match.params.id}</h2>`
//             </div>
//         );
//     }
// }
// export default GitHubUser;