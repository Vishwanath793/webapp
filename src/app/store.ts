import {
  Action,
  AnyAction,
  configureStore,
  EnhancedStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

/**
 * Create the store
 * @param initialState
 * @returns {EnhancedStore<{}>}
 */
export const store: EnhancedStore<any, AnyAction, SagaMiddleware<object>[]> =
  configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
