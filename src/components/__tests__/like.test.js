import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {

	it("Defaults to 0 likes", () => {
      const likes = container.querySelector("p");
	  expect(likes.textContent).toBe("Likes: 0");
    });
    
    it("add 1 like", () => {
        const likes = container.querySelector("p");
        const likeB = container.querySelector("#increment");
        act(() => {
            likeB.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          });
        expect(likes.textContent).toBe("Likes: 1")
    })
    it("1 dislike", () => {
        const likes = container.querySelector("p");
        const dislikeB = container.querySelector("#decrement");
        act(() => {
            dislikeB.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          });
        expect(likes.textContent).toBe("Likes: -1")
    })

});