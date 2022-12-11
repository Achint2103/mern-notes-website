import bcrypt from "bcryptjs";

const users = [
  {
    name: "Achint Gusain",
    email: "gusainachint@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Vishwanath Gusain",
    email: "gusainvishwanath2103@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
