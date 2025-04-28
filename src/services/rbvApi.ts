import axios, { AxiosRequestConfig } from "axios";

const callAxiosApi = async (
  endpoint: string,
  options: AxiosRequestConfig = {}
): Promise<any> => {
  const axiosOptions: AxiosRequestConfig = {
    url: endpoint,
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  };

  try {
    const res: any = await axios(axiosOptions);
    console.log("🚀 ~ rbv core res:", res);
    return res?.data || res;
  } catch (err: any) {
    console.log("🚀 ~ rbv core api err:", err);
    const { response } = err;
    throw response?.data;
  }
};

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return Promise.resolve(response?.data);
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

export { callAxiosApi };
