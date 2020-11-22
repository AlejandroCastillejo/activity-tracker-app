import "./activities-table-item.scss";

function TableItem({ item, toggleItemSelected, currentCheckbox }) {
  return (
    <div className="table-item">
      <div className="item-block">
        <input
          className="checkbox"
          type="checkbox"
          id={item.id}
          name="item-checkbox"
          ref={currentCheckbox}
          onChange={(event) => toggleItemSelected(event.target)}
        />
      </div>
      <div className="item-block">{item && item.name}</div>
      <div className="item-block">{item && item.covidFriendly}</div>
      <div className="item-block">{item && item.timesPerformed}</div>
    </div>
  );
}

export default TableItem;
