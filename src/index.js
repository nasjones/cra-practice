import foods from "./foods";
import { choice, remove } from "./helpers";
import App from "./app";
import reactDom from "react-dom";

let food = choice(foods);
console.log(`I’d like one ${food}, please.`);
remove(foods, food);
console.log(`Here you go: ${food}`);
console.log("Delicious! May I have another?");
console.log(`I'm sorry, we're all out. We have ${foods.length} left.`);

reactDom.render(<App />, document.getElementById("root"));
