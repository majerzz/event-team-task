import axios from "axios";

export const fetchCatFacts = async () => {
  return await axios.get('https://catfact.ninja/fact');
}
