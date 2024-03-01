import React, { useState } from "react";
import Button from "./Button";

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contactNumber: "",
    email: "",
    query: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    if (
      formData.name.trim() === "" ||
      formData.company.trim() === "" ||
      formData.contactNumber.trim() === "" ||
      formData.email.trim() === "" ||
      formData.query.trim() === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    if (
      isNaN(formData.contactNumber.trim()) ||
      formData.contactNumber.trim().length !== 10
    ) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    console.log(formData);

    setFormData({
      name: "",
      company: "",
      contactNumber: "",
      email: "",
      query: "",
    });
  }

  return (
    <section className="my-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8  p-2 w-full lg:w-[90%] mx-auto">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-primary-500 font-bold mb-4">
              Lets Upgrade Your Business.
            </h2>
            <p className="font-sans text-base lg:text-xl">
              Get in touch with us through the form and we will get right back
              to you very shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 my-8 md:my-0"
          >
            <div className="flex gap-3 flex-col md:flex-row">
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 flex-col md:flex-row">
              <input
                className="form-input"
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="form-input min-h-16"
              name="query"
              style={{ resize: "none" }}
              placeholder="Your Query here"
              value={formData.query}
              onChange={handleChange}
            ></textarea>
            <span className="block w-fit">
              <Button onClick={handleSubmit} type="primary">
                Send Message
              </Button>
            </span>
          </form>
        </div>

        <hr className="border-1  border-primary-500/20 mt-10 mb-10" />

        <div className="flex flex-col px-6 md:p-0 md:flex-row flex-wrap md:items-center justify-around gap-4">
          <div>
            <p className="text-gray-500">Email us</p>
            <h4 className="bold text-xl font-sans semibold">
              info@collcat.com
            </h4>
          </div>

          <div>
            <p className="text-gray-500">Contact us </p>
            <h4 className="bold text-xl font-sans semibold">
              +977 98123456789
            </h4>
          </div>

          <div>
            <p className="text-gray-500">Visit Us</p>
            <h4 className="bold text-xl font-sans semibold">
              Dillibazar, Kathmandu
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
