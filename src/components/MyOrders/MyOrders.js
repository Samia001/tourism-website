import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://hidden-brushlands-98491.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://hidden-brushlands-98491.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  let i = 1;
  return (
    <div>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>All Customer Orders List</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Order Lists</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* ======= About Section ======= */}
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <table class="table table-bordered table-dark">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Customer Email</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service) => (
                      <tr key={service._id}>
                        <th scope="row">{i++}</th>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.phone}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleDelete(service._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </main>
    </div>
  );
};

export default MyOrders;
