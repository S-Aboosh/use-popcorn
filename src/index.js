import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} onSetRating={setMovieRating} />
//       <p>this product has rated {movieRating} times</p>
//     </div>
//   );
// }
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrable", "bad", "okey", "good", "amazing"]}
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
