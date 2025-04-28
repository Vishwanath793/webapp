import { getEnvBasedOnHostName } from "./../features/common/utils/projectEnvPath";
const { API_ENDPOINT }: any = getEnvBasedOnHostName();

export const DELIVERY_USER_DETAILS = `${API_ENDPOINT}/deliveryAndUserDetails?deliveryId=DELIVERY_ID&userId=USER_ID`;
export const GET_QECG_LIST: string = `${API_ENDPOINT}/rbvList/delivery/DELIVERYID`;
