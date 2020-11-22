import { useRef, useContext } from "react";
import { ActivitiesContext } from "../../context/activities-context";

import TableItem from "../activities-table-item/activities-table-item";

import "./activities-table.scss";

function ActivitiesTable() {
  const { itemsWithSelector, setItemsWithSelector } = useContext(
    ActivitiesContext
  );
  const headerCheckbox = useRef(null);
  const listCheckbox = useRef([]);

  const toggleItemSelected = (evt) => {
    setItemsWithSelector(
      itemsWithSelector.map((item) =>
        item.id.toString() === evt.id
          ? { ...item, selected: evt.checked }
          : item
      )
    );
    headerCheckbox.current.checked = false;
    // console.log(itemsWithSelector);
    // console.log(listCheckbox);
  };

  const toggleAllItems = (evt) => {
    setItemsWithSelector(
      itemsWithSelector.map((item) => ({
        ...item,
        selected: evt.checked,
      }))
    );

    for (var i = 0; i < listCheckbox.current.length; i++) {
      listCheckbox.current[i] &&
        (listCheckbox.current[i].checked = evt.checked);
    }
    // console.log(itemsWithSelector);
    // console.log(listCheckbox);
  };

  return (
    <div className="activities-table">
      <div className="table-header">
        <div className="header-block">
          <input
            className="checkbox"
            type="checkbox"
            id="headerCheckbox"
            name="header-checkbox"
            ref={headerCheckbox}
            onChange={(event) => toggleAllItems(event.target)}
          />
        </div>
        <div className="header-block">Activity name</div>
        <div className="header-block">COVID friendly</div>
        <div className="header-block">Times performed</div>
      </div>
      <div className="table-body">
        {itemsWithSelector &&
          itemsWithSelector.map((item, i) => {
            return (
              <TableItem
                key={item.id}
                item={item}
                toggleItemSelected={toggleItemSelected}
                currentCheckbox={(el) => (listCheckbox.current[i] = el)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ActivitiesTable;
