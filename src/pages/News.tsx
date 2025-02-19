import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import newsData from "../data/news.json";
import "../styles/pages/News.scss"

// Define the structure of a single news segment
interface NewsSegment {
  title: string;
  description: string;
  date: string;
  author: string;
  url_path: string;
}

// Define the structure of the full news data
interface NewsData {
  data: {
    segments: NewsSegment[]; // ✅ Change from "Record<string, NewsSegment>" to an array
  };
}

const typedNewsData: NewsData = newsData; // ✅ Now matches the correct structure

const News = () => {
  return (
    <div>
      <Navbar />
      <div className="news-page">
        <h1>Latest News</h1>

        {typedNewsData.data.segments.map((segment, index) => (
          <div key={index} className="news-item">
            <h2>{segment.title}</h2>
            <p>{segment.description}</p>
            <p><strong>By:</strong> {segment.author} | <strong>Date:</strong> {segment.date}</p>
            <a href={segment.url_path} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default News;
