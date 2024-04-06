import React from "react";

import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <main className="container mx-auto mt-12 h-[40dvh] grid place-content-center  text-center">
        <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
          Page Not Found
        </h1>
        <p>The page you're looking for was not found!</p>
        <Link to="/" className="mt-20">
          <Button type="primary" centered="true">
            Return to home
          </Button>
        </Link>
      </main>
    </>
  );
}
