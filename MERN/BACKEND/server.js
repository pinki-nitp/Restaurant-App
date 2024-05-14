// import app from "./app.js";

// app.listen(process.env.PORT, ()=>{
//     console.log('Server Running On Port, ${PORT}');
// });
import app from "./app.js";


app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT }`);
});
