import axios from "axios";

export const fetchAgeData = async (name: string): Promise<number> => {
  const { data } = await axios.get(`https://api.agify.io?name=${name}`);
  return data.age as number;
};