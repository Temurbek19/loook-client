import axios from "axios";

const DeleteUser = (e, getUsers, setGetUsers) => {
  const id = Number(e.target.id);
  axios
    .delete(`http://localhost:4500/users${id}`)
    .then(function (response) {
      if (response.data === "User has deleted!") {
        const users = getUsers.data.filter((item) => item.user_id !== id);
        setGetUsers({
          data: users,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default DeleteUser;
