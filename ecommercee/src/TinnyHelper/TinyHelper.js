const phoneValidation =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
let serverApi = "http://localhost:3001/";
const headers = {
  headers: { accessToken: localStorage.getItem("accessToken") },
};
const img_headers = {
  headers: {
    "content-type": "multipart/form-data",
    accessToken: localStorage.getItem("accessToken"),
  },
};
export { phoneValidation, serverApi, headers, img_headers };
