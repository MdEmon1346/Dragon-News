import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  // Generate star rating display
  const renderStars = (num) => {
    const fullStars = Math.floor(num);
    const hasHalf = num % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} style={{ color: "#f59e0b" }} />);
      } else if (i === fullStars && hasHalf) {
        stars.push(
          <FaStar key={i} style={{ color: "#f59e0b", opacity: 0.5 }} />,
        );
      } else {
        stars.push(<FaStar key={i} style={{ color: "#d1d5db" }} />);
      }
    }
    return stars;
  };

  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toISOString().split("T")[0]; // YYYY-MM-DD
  };

  // Truncate details
  const truncate = (text, maxLen = 200) => {
    if (!text) return "";
    return text.length > maxLen ? text.slice(0, maxLen) + "..." : text;
  };

  return (
    <div 
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        marginBottom: "24px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Author Info */}
      <div className=" bg-base-200"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px 12px",
        }}
      >
        <div className=" bg-base-200" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={author?.img}
            alt={author?.name}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #f3f4f6",
            }}
          />
          <div className=" bg-base-200">
            <p
              style={{
                margin: 0,
                fontWeight: "600",
                fontSize: "15px",
                color: "#111827",
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              {author?.name}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#6b7280",
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              {formatDate(author?.published_date)}
            </p>
          </div>
        </div>

        {/* Bookmark & Share Icons */}
        <div className=" bg-base-200" style={{ display: "flex", gap: "14px" }}>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
              fontSize: "18px",
              padding: "4px",
              transition: "color 0.2s",
            }}
            title="Bookmark"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <FaBookmark />
          </button>
          <button className=" bg-base-200"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
              fontSize: "18px",
              padding: "4px",
              transition: "color 0.2s",
            }}
            title="Share"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className=" bg-base-200" style={{ padding: "0 20px 14px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "700",
            color: "#111827",
            lineHeight: "1.5",
            fontFamily: "'Georgia', serif",
          }}
        >
          {title}
        </h2>
      </div>

      {/* Thumbnail Image */}
      <div className=" bg-base-200" style={{ padding: "0 20px 16px" }}>
        <img
          src={thumbnail_url}
          alt={title}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "8px",
            display: "block",
          }}
        />
      </div>

      {/* Details / Description */}
      <div className=" bg-base-200" style={{ padding: "0 20px 16px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#4b5563",
            lineHeight: "1.7",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          {truncate(details, 220)}{" "}
          <span
            style={{
              color: "#f97316",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Read More
          </span>
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          borderTop: "1px solid #f3f4f6",
          margin: "0 20px",
        }}
      />

      {/* Rating & Views */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
        }}
      >
        {/* Stars */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ display: "flex", gap: "3px", fontSize: "16px" }}>
            {renderStars(rating?.number || 0)}
          </div>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#374151",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            color: "#6b7280",
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: "14px",
          }}
        >
          <FaEye style={{ fontSize: "17px" }} />
          <span style={{ fontWeight: "500" }}>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
