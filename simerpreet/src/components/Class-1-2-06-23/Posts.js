import React, { useEffect, useState } from "react";
export const Posts = ({ posts }) => {
    return (<>
        {/* <h1>Home Services Products Blogs ContactUS </h1> */}
        {(posts && posts.length > 0) && posts.map((user) => user.id)}
        {/* <h2>This website is produced in 2020</h2> */}

    </>)
}

export const Users = ({ users }) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        setUser(users.data)
    }, [])
    return (<>
        {/* <h1>Home Services Products Blogs ContactUS </h1> */}
        {(user && user.length > 0) && user.map((user) => <li>{user.id}</li>)}
        {/* <h2>This website is produced in 2020</h2> */}

    </>)
}

export class MyComponent extends React.Component {
    render() {
        // This will intentionally throw an error for demonstration purposes
        throw new Error('Error occurred in MyComponent');

        return <div>My Component</div>;
    }
}
export default { Posts, Users }