import constants from "../../../constants";

export const getImportQECGPayload = (uploadedfile: File) => {
  const deliveryId: string = sessionStorage.getItem("deliveryId") || "";
  const lockedBy: string = sessionStorage.getItem("userName") || "";
  const rbvStatus: number = 0;
  const formData = new FormData();
  formData.append("file", uploadedfile);
  return { formData, deliveryId, lockedBy, rbvStatus };
};
