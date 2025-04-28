import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from "@reduxjs/toolkit";

import landingPageReducer, {
  LandingPageState,
} from "./../features/landingPage/slice/landingPageSlice";

const rootReducer: Reducer<
  CombinedState<{
    landingPage: LandingPageState;
  }>,
  AnyAction
> = combineReducers({
  landingPage: landingPageReducer,
});
export default rootReducer;
