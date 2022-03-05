import axios from "axios";

const PostUser = (userRef, addUser, setAddUser) => {
  axios
    .post("http://localhost:4500/users", {
      user_name: userRef.current.value,
      user_type: 2,
    })
    .then(function (response) {
      if (response.data === "User has Added!") {
        userRef.current.value = "";
        setAddUser(!addUser);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default PostUser;
