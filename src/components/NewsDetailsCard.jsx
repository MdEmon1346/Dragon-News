import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  if (!news) return <p className="text-center py-10">News not found!</p>;

  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-3">{news.title}</h2>
      <div className="flex justify-between text-sm text-gray-500 mb-3">
        <span>✍️ {news.author?.name}</span>
        <span>📅 {news.author?.published_date}</span>
      </div>
      <p className="text-base">{news.details}</p>
      <div className="mt-4 text-sm text-gray-400">
        ⭐ Rating: {news.rating?.number} | 👁️ Views: {news.total_view}
      </div>
      <div>
        <Link className="btn btn-primary" to={`/category/${news.category_id}`}>
          Back to categoey
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard; // ✅ এটা মিস করলেই এই error আসে
