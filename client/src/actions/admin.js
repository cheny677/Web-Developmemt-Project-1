function makeDataRow(id, username, email, firtname, lastname, post) {
    let new_data = {};
    new_data["id"] = id;
    new_data["username"] = username;
    new_data["email"] = email;
    new_data["firstname"] = firtname;
    new_data["lastname"] = lastname;
    new_data["post"] = post;
    return new_data;
}

export const getusers = async(userList) => {
    // the URL for the request
    const url = "/api/users";
    
    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get users");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            let myrow = [];
            let user_arr = json; // setstate() infinite loop on render?
            for (let i = 0; i < user_arr.length; i++) {
                const user_object = user_arr[i];
                myrow.push(makeDataRow(user_object._id, user_object.username, user_object.email, user_object.firstName, user_object.lastName, user_object.posts.length))
            }
            userList.setState({ data_row: myrow })
        })
        .catch(error => {
            console.log(error);
        });
};

export const getdeleted = (id) => {
    const url = `/api/users/${id}`;
    const request = new Request(url, {
        method: "delete",
      });
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            alert("Could not get users");
        }
    })
    .catch(error => {
        console.log(error);
    });
}