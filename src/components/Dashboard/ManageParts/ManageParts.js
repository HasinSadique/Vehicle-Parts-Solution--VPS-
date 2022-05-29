import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal/DeleteConfirmModal";
import PartRow from "./PartRow/PartRow";

const ManageParts = () => {
  const [deletingEquipment, setDeletingEquipment] = useState(null);

  const {
    data: equipments,
    isLoading,
    refetch,
  } = useQuery("equipments", () =>
    fetch("http://localhost:5000/part", {
      headers: {},
    }).then((res) => res.json())
  );
  // console.log("parts: >> ", equipments);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-full">
      <h2 className="ml-3 mt-2 my-5 text-2xl">
        Manage Equipments: {equipments.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {equipments.map((equipment, index) => (
              <PartRow
                key={equipment._id}
                equipment={equipment}
                index={index}
                refetch={refetch}
                setDeletingEquipment={setDeletingEquipment}
              ></PartRow>
            ))}
          </tbody>
        </table>
      </div>

      {deletingEquipment && (
        <DeleteConfirmModal
          deletingEquipment={deletingEquipment}
          refetch={refetch}
          setDeletingEquipment={setDeletingEquipment}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageParts;
