// src/layout/Root.jsx
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

// Your existing components
import Header from "../component/Header";
import Footer from "../component/Footer";
import ScrollToTop from "../component/ScrolltoTop";
import ScrollTopButton from "../component/ScrollTopButton";
import PageMeta from "../component/PageMeta";

// Import the separate modal
import LoginModal from "../component/LoginModal"; // Adjust path if needed

const Root = () => {
  const { showLoginModal, setShowLoginModal, currentUser } = useAuth();
  const navigate = useNavigate();

  // Auto redirect after successful login
  useEffect(() => {
    if (currentUser && showLoginModal) {
      setShowLoginModal(false);

      const intendedPath = localStorage.getItem("intendedPath");
      if (intendedPath && intendedPath !== "/login") {
        localStorage.removeItem("intendedPath");
        navigate(intendedPath);
      } else {
        navigate("/services"); // fallback
      }
    }
  }, [currentUser, showLoginModal, setShowLoginModal, navigate]);

  return (
    <div>
      <PageMeta />
      <ScrollTopButton />
      <ScrollToTop />

      <div className="mt-20">
        <Header />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Global Login Modal - Now a separate clean component */}
      {showLoginModal && <LoginModal />}
    </div>
  );
};

export default Root;