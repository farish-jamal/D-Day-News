import { Container } from "@material-ui/core";
import React from "react";
import "./News.css";
import NewsItem from "./NewsItem";

function News({ articles }) {
  return (
    <div className="news">
      <Container maxWidth="md">
        {/* <div className="inshortsAd">
          <p>For the best experience use inshorts app on your smartphone</p>
          <div className="ad-img">
            <img
              className="appStore"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              alt="Appstore"
            />
            <img
              className="playStore"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              alt="Playstore"
            />
          </div>
        </div> */}
        <div className="inshortsContent">
          {articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={
                  element.title
                    ? element.title
                    : "Sorry Title is not avaialble right now!"
                }
                description={
                  element.description
                    ? element.description
                    : "Sorry Description is not available right now!"
                }
                urlToImage={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYvcPlOIwnYWv-V6j7H2HAhq6kDTWPgMQucNXF8jmJfNe6TNx-UpK6jSpjEBFsqShH2s&usqp=CAU"
                }
                url={element.url}
                publishedAt={
                  element.publishedAt ? element.publishedAt : "Unknown"
                }
                author={element.author ? element.author : "Unknown"}
                source={element.source.name ? element.source.name : "Unknown"}
              />
            );
          })}
        </div>
        {/* <div className="inshortsAdMd">
          <p>For the best experience use inshorts app on your smartphone</p>
          <div className="ad-img">
            <img
              className="appStore"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              alt="Appstore"
            />
            <img
              className="playStore"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              alt="Playstore"
            />
          </div>
        </div> */}
      </Container>
    </div>
  );
}

export default News;
