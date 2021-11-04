import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(
        "https://hidden-brushlands-98491.herokuapp.com/services",
        data
      )
      .then((res) => {
        if (res.data.insertedId) {
          alert("Data Added Successfully!");
          reset();
        }
      });
  };
  return (
    <>
      {/* ======= Booking  Section ======= */}
      <section className="contact">
        <div className="container">
          <div className="section-title">
            <span>Add New Services</span>
            <h2>Add New Services</h2>
            <p>Provide Your Information To Add New Service!</p>
          </div>
          <div className="row">
            <div className="col-lg-8 mt-5 mt-lg-0 mx-auto d-flex align-items-stretch">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="php-email-form"
              >
                <div className="form-group mt-3">
                  <label htmlFor="name">Location:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    {...register("name")}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Package:</label>
                  <input
                    type="test"
                    className="form-control"
                    name="email"
                    id="email"
                    {...register("packages")}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="name">Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    name="address"
                    id="address"
                    {...register("date")}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Image Link:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    id="city"
                    {...register("image")}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Description:</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="number"
                    id="number"
                    {...register("description")}
                    required
                  />
                </div>

                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your data has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Add New Service</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Booking  Section */}
    </>
  );
};

export default AddService;
