import { SagaIterator } from "redux-saga";
import { call, put, select, takeLatest } from "redux-saga/effects";
import constants from "../../../constants";
import Session from "../../../services/storage/storage.session";

import {
  getQecgListData,
  lockQecgForm,
  setQecgSaveFailure,
} from "../slice/landingPageSlice";
import { callAxiosApi } from "../../../services/rbvApi";
import { GET_QECG_LIST } from "../../../constants/apiUrls";

const session = new Session();

const getQECGList = async (deliveryId: string) => {
  return await callAxiosApi(GET_QECG_LIST.replace("DELIVERYID", deliveryId), {
    method: "GET",
  });
};

const { SAVE_SUCCESS, LOCK_MESSAGE } = constants;
export default function* watchSaveApiSaga() {
  yield takeLatest(getQecgListData, getQECGListDataSaga);
}

export function* getQECGListDataSaga(action: any): SagaIterator {
  try {
    const response = yield call(getQECGList, action.payload);
    const {
      rbvItemized = [],
      rbvDeliveryWide = {},
      uuid = null,
    } = response?.output;
    session.setItem("uuid", uuid);
    if (rbvItemized.length > 0) {
      yield call(rbvDeliveryWide, rbvItemized);
    } else {
      yield put(
        lockQecgForm({
          deliveryId: session.getItem("deliveryId"),
          uuid: null,
          userId: session.getItem("userId"),
          modifiedBy: "",
          lockedBy: session.getItem("userName"),
          rbvStatus: 0,
          calledBy: "",
        })
      );
    }
  } catch (err: any) {
    console.log("🚀 ~ function*getQecgListDataSaga ~ err:", err);
    const error: string = err?.data?.errorDescription;
    yield put(setQecgSaveFailure(error));
  }
}
