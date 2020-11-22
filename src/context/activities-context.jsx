import { createContext, useState, useEffect, useCallback } from "react";

import { ActivitiesAPI } from "../services/activities-api-services";

const ActivitiesContext = createContext(null);

function ActivitiesContextProvider({ children }) {
  const [itemsWithSelector, setItemsWithSelector] = useState([]);
  const [loadingActivities, setLoadingActivities] = useState(false);

  const updateList = useCallback(async () => {
    setLoadingActivities(true);
    await ActivitiesAPI.getItemsList()
      .then((items) => {
        setItemsWithSelector(
          items.map((item) => ({
            ...item,
            selected: false,
          }))
        );
        console.log("items list updated");
      })
      .catch((error) => {
        console.log(error);
        setItemsWithSelector([]);
      });
    setLoadingActivities(false);
  }, []);

  useEffect(() => {
    updateList();
  }, [updateList]);

  return (
    <ActivitiesContext.Provider
      value={{
        itemsWithSelector,
        setItemsWithSelector,
        updateList,
        loadingActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}

export { ActivitiesContext, ActivitiesContextProvider };
