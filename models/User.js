// src/models/User.js

class User {
  constructor(id, username, email, password, profilePicture, role) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.profilePicture = profilePicture;
    this.role = role;
  }
}

export default User;