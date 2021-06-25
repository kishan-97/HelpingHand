const express = require("express");
const app = express();
const http = require("http").createServer(app);
const session = require("express-session");
const PORT = process.env.PORT || 5000;

const passport = require("passport");
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "top-secret",
  })
);
app.use(express.static(__dirname + "../../client/public"));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

const Register_route = require("./routes/register");
const Login_route = require("./routes/login");
const Contact_route = require("./routes/contact");

app.use(Register_route);
app.use(Login_route);
app.use(Contact_route);
// Socket
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("Socket Connected...");
  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg);
  });
});

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
