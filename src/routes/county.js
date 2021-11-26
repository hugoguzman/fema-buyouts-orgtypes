import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
  return <h2>Number of Buyout Grants: {params.countyID}</h2>;
}