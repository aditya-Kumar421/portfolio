import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import heroImage from "../assets/hero-bg.jpg";
import notFoundImage from "../assets/not_found_02.jfif";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 dark:bg-background/70"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <img
            src={notFoundImage}
            alt="Not Found"
            className="w-32 h-32 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 text-primary">Oops! Page not found</h1>
          <a
            href="/"
            className="text-xl text-muted-foreground hover:text-muted-foreground-hover underline"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
