import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import About from "./Page/About";
import PostPage from "./Page/PostPage";
import SearchBar from "./SearchBar/SearchBar"; 
import "./index.css";


const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredPosts([]);
    } else {
      setFilteredPosts((prevPosts) =>
        prevPosts.filter((post) =>
          post.text.toLowerCase().includes(searchTerm.toLowerCase()) 
        )
      );
    }
  };

  const handleBack = () => {
    setSelectedPostId(null);
  };

  return (
    <Router>
      <div>
        <Header />
        <main>
          <SearchBar onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/posts"
              element={
                <PostPage
                  selectedPostId={selectedPostId}
                  onBack={handleBack}
                  filteredPosts={filteredPosts}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
