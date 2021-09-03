import {
  $CombinedState,
  CombinedState,
  MiddlewareAPI,
  Store,
} from "@reduxjs/toolkit";
import { LoginUser } from "../src/redux/loginUser";
import { User } from "./User";

export type middleStoreType = MiddlewareAPI<
  any,
  { readonly [$CombinedState]?: undefined } & {
    loginUserState: User | null;
  }
> & { dispatch: unknown };

export type actionBody = LoginUser;

export type nextAction = (action: actionBody) => void;
