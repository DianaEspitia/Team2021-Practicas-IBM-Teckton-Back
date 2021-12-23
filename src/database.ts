import { connect } from "mongoose";

export async function startConn() {
  // Cambiar la ruta y el puerto
  await connect("mongodb://a03f9687-us-south.lb.appdomain.cloud:27017/clientsdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("Database is connected");
}
