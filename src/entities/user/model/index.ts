import { createStore } from "effector";

export const $user = createStore({ id: 1, name: "Mike" });
export const $userName = $user.map((data) => data.name)