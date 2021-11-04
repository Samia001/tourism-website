import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const BookingProceed = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://hidden-brushlands-98491.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booking Successfully!");
          reset();
        }
      });
  };
  const { user } = useAuth();
  return (
    <>
      {/* ======= Booking  Section ======= */}
      <section className="contact">
        <div className="container">
          <div className="section-title">
            <span>Proceed To Booking</span>
            <h2>Proceed To Booking</h2>
            <p>Provide Your Information To Proceed Booking!</p>
          </div>
          <div className="row">
            <div className="col-lg-8 mt-5 mt-lg-0 mx-auto d-flex align-items-stretch">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="php-email-form"
              >
                <div className="form-group mt-3">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    className="form-control"
                    {...register("name")}
                    readOnly
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue={user.email}
                    {...register("email")}
                    readOnly
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="name">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    {...register("address")}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    id="city"
                    {...register("city")}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="number"
                    id="number"
                    {...register("phone")}
                    required
                  />
                </div>

                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your order has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Submit</button>
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

export default BookingProceed;
