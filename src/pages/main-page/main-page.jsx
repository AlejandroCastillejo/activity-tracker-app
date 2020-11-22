import { useContext } from "react";
import { ActivitiesContext } from "../../context/activities-context";

import ActivitiesTable from "../../components/activities-table/activities-table";
import CounterButton from "../../components/counter-button/counter-button";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";

import "./main-page.scss";

const ActivitiesTableWithSpinner = LoadingSpinner(ActivitiesTable);

function MainPage() {
  const { loadingActivities } = useContext(ActivitiesContext);

  return (
    <div className="main-page">
      <ActivitiesTableWithSpinner isLoading={loadingActivities} />
      <CounterButton />
    </div>
  );
}

export default MainPage;
