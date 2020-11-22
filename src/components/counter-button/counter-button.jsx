import { useEffect, useState, useContext } from "react";

import { ActivitiesContext } from "../../context/activities-context";
import { ActivitiesAPI } from "../../services/activities-api-services";

import "./counter-button.scss";

function CounterButton() {
  const { itemsWithSelector, updateList } = useContext(ActivitiesContext);

  const [buttonOn, setButtonOn] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const performActivities = async () => {
    console.log("PerformActivities clicked");

    for (let item of selectedItems) {
      if (item.selected & (item.covidFriendly === "yes")) {
        console.log(`increment ${item.name}`);
        let newTimesP = parseInt(item.timesPerformed) + 1;
        let newItem = { ...item, timesPerformed: newTimesP };
        // console.log("newItem: ", newItem);
        await ActivitiesAPI.updateItem(item.id, newItem)
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      } else if (item.selected & (item.covidFriendly === "no")) {
        alert(`ATENTION!! \n\n${item.name} is not a "COVID friendly" activity`);
      }
    }
    updateList();
    setButtonOn(false);
  };

  useEffect(() => {
    let selectedItems = itemsWithSelector.filter(
      (item) => item.selected === true
    );
    setSelectedItems(selectedItems);
    setButtonOn(selectedItems.length > 0);
  }, [itemsWithSelector]);

  return (
    <div>
      {buttonOn && (
        <button className="counter-button" onClick={() => performActivities()}>
          Perform activities
        </button>
      )}
    </div>
  );
}

export default CounterButton;
