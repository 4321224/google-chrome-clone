import axios from "axios";

export const GoogleSearch = async (term) => {
  const { data } = await axios.get(
    "https://www.googleapis.com/customsearch/v1",
    {
      params: {
        key: process.env.Google_Search_Api_Key,
        cx: process.env.Search_Engine_Id,
        q: term,
      },
    }
  );
  return data;
};
