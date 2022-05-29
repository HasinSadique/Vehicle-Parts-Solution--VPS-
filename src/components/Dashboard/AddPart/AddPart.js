import { useForm } from "react-hook-form";

const AddPart = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "ff80d7d39744e8bbef0749f30f2f77f9";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const equipment = {
            name: data.name,
            description: data.description,
            availableQuantity: data.availableQuantity,
            minimumOrder: data.minimumOrder,
            price: data.price,
            image: image,
          };
          // send to your data base
          fetch("https://vehicle-parts-solution.herokuapp.com/part", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(equipment),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                alert("Equipment added successfully");
                reset();
              } else {
                alert("Failed to add the Equipment");
              }
            });
        }
      });
  };

  return (
    <div className="mx-auto border-2 my-auto rounded-2xl">
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center font-bold">
              Add a product
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="name"
                  placeholder="Equipment's Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Description */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full max-w-xs"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.description?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Available Quantity */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="number"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("availableQuantity", {
                    required: {
                      value: true,
                      message: "Available Quantity is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.availableQuantity.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Minimum Order */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="number"
                  placeholder="Minimum Order"
                  className="input input-bordered w-full max-w-xs"
                  {...register("minimumOrder", {
                    required: {
                      value: true,
                      message: "Minimum order is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.minimumOrder.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Price */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="number"
                  placeholder="Price Per Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>

              {/* image */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Equipments' image</span>
                </label>

                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPart;
