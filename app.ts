import { Server, Socket } from "socket.io";

const io: Server = require("socket.io")(9000, {
  cors: {
    origin: "*",
    methods: ["POST"],
  },
});

interface Users {
  [key: string]: string;
}

const users: Users = {};

io.on("connection", (socket: Socket) => {
  socket.on("new-user-joined", (name: string) => {
    // console.log("new user", name);
    users[socket.id] = name;
    socket.broadcast.emit("userjoined", name);
  });

  socket.on("send", (message: string) => {
    socket.broadcast.emit("receive", {
      message: message,
      name: users[socket.id],
    });
  });

  socket.on("disconnect", (message: string) => {
    socket.broadcast.emit("leave", users[socket.id]);
    delete users[socket.id];
  });
});

// app.listen(PORT,()=>{
//   console.log(`Application is listining on ${PORT}`);
// });
