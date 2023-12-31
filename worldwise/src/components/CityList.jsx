import { useCities } from "../contexts/CitiesContext";
import styles from "../styles/CityList.module.css";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import CityItem from "./CityItem";

export default function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => (
        <CityItem city={city} key={i} />
      ))}
    </ul>
  );
}
