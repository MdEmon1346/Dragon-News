import React from "react";
import Header from "../../Header";
import RightAside from "../RightAside";
import NewsDetailsCard from "../../NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  // সরাসরি find করো, useEffect দরকার নেই
  const news = data.find((singleNews) => String(singleNews._id) === String(id));

  return (
    <div>
      <header className="py-3">
        <Header />
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-8">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
