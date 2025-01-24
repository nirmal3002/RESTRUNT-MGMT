import app from "./app.js";

// START SERVER
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const port = process.env.PORT || 5000;  // Use dynamic port in production
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
