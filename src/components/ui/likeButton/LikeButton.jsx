import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./LikeButton.css"; // Import your CSS styles for the button

// Like component with count display
const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch current like count on component mount
  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await fetch("https://myportfolio-server-c3vo.onrender.com/api/likes");
        if (response.ok) {
          const data = await response.json();
          setLikeCount(data.count);
        }
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };

    fetchLikeCount();
  }, []);

  const handleLikes = async () => {
    if (isLiked || isLoading) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch("https://myportfolio-server-c3vo.onrender.com/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ like: true }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setLikeCount(data.count);
        setIsLiked(true);
        // Store in localStorage that user has liked the page
        localStorage.setItem("portfolio_liked", "true");
        console.log("Like recorded successfully");
      } else {
        console.error("Error recording like");
      }
    } catch (error) {
      console.error("Error submitting like:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Check if user has already liked
  useEffect(() => {
    const hasLiked = localStorage.getItem("portfolio_liked") === "true";
    setIsLiked(hasLiked);
  }, []);

  return (
    <button
      onClick={handleLikes}
      className={`profile-social-link ${isLiked ? "liked" : ""} ${isLoading ? "loading" : ""}`}
      disabled={isLiked || isLoading}
      title={isLiked ? "You already liked this portfolio" : "Like this portfolio"}
    >
      <FaThumbsUp />
      {likeCount > 0 && <span className="like-count">{likeCount}</span>}
    </button>
  );
};

// Usage in your Home component
// Replace your current FaThumbsUp button with:
// <LikeButton />

export default LikeButton;