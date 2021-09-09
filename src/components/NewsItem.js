import React from "react";
import "./NewsItem.css";

function NewsItem({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  source,
}) {
  return (
    <div className="card">
      <img src={urlToImage} alt="This is Cover  Img" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>
          <small>
            <span style={{ fontWeight: "800", cursor: "pointer" }}>
              <a href={url} style={{ textDecoration: "none", color: "black" }}>
                shot
              </a>
            </span>{" "}
            by {author} / {publishedAt = new Date().toGMTString()}
          </small>
        </p>
        <p>{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "black", textDecoration: "none",}}
        >
          Read More at <b>{source}</b>
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
