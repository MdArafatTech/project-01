// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const pageTitles = {
//   "/": "Home",

//   "/contact": "Contact",
 
//   "/services":"Services",
  
//   "/about": "About",
//   "/register": "Register",
//   "/login": "Login",
//   "/account": "Account",
//   "/forgotpass": "Forgot Password",
// };

// const PageMeta = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const title = pageTitles[location.pathname.toLowerCase()] || "Page";
//     document.title = `${title} - ArafatTech`;
//     window.scrollTo(0, 0);
//   }, [location]);

//   return null;
// };

// export default PageMeta;













import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageMeta = () => {
  const location = useLocation();

  useEffect(() => {
    // Auto-generate title from pathname: capitalize words, replace 'pass' with 'Password'
    const path = location.pathname.toLowerCase();
    let title = path
      .split('/')
      .filter(Boolean)
      .map(word => {
        if (word === 'pass') return 'Password';
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ') || 'Home';
    
    document.title = `${title} - ArafatTech`;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default PageMeta;
