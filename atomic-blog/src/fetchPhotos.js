import axios from "axios";

export default async function fetchPhotos() {
  const API_KEY = "c52IE_rkxcxLGVEGrufDhYmyDDygO49tE-NvNkCiWys";
  const url = `https://api.unsplash.com/photos/random?client_id=${API_KEY}`;

  const response = await axios.get(url);

  console.log(response);
}
