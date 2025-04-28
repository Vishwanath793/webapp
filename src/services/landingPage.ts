import { DELIVERY_USER_DETAILS } from "../constants/apiUrls";
import { callAxiosApi } from "./rbvApi";

export const getDeliveryAndUserDetails = async (
  deliveryId: string,
  userId: string
) => {
  return await callAxiosApi(
    DELIVERY_USER_DETAILS.replace("DELIVERY_ID", deliveryId).replace(
      "USER_ID",
      userId
    ),
    {
      method: "GET",
    }
  );
};
