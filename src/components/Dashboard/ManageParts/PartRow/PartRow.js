import React from "react";

const PartRow = ({ equipment, index, refetch, setDeletingEquipment }) => {
  const { name, availableQuantity, img } = equipment;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-14 rounded-xl">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{availableQuantity}</td>
      <td>
        <label
          onClick={() => setDeletingEquipment(equipment)}
          for="delete-confirm-modal"
          className="btn btn-xs btn-error text-white"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default PartRow;
