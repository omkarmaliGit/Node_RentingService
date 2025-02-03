import { Route, Routes } from "./routes.types";
import { UserRouter } from "../user/user.routes";
import { SpaceRouter } from "../spaces/spaces.routes";

export const routes: Routes = [
  new Route("/user", UserRouter),
  new Route("/space", SpaceRouter),
];
