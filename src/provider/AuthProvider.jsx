// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   sendPasswordResetEmail,
//   signOut,
//   onAuthStateChanged,
 
//   signInWithPhoneNumber,
//   updatePassword
// } from "firebase/auth";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Register
//   const register = (email, password) =>
//     createUserWithEmailAndPassword(auth, email, password);

//   // Login
//   const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   // Google login
//   const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

//   // Logout
//   const logout = () => signOut(auth);

//   // Forgot password by email
//   const resetPasswordByEmail = (email) => sendPasswordResetEmail(auth, email);

//   // ---------- Phone OTP ----------
//   const sendPhoneOTP = (phoneNumber, appVerifier) =>
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier);

//   const updateUserPassword = (user, newPassword) => updatePassword(user, newPassword);

//   // Track auth state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     register,
//     login,
//     loginWithGoogle,
//     logout,
//     resetPasswordByEmail,
//     sendPhoneOTP,
//     updateUserPassword,
//   };

//   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
// };

// // Custom hook
// export const useAuth = () => useContext(AuthContext);




































import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  signInWithPhoneNumber,
  updatePassword,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false); // Added for popup

  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

  const logout = () => signOut(auth);

  const resetPasswordByEmail = (email) => sendPasswordResetEmail(auth, email);

  const sendPhoneOTP = (phoneNumber, appVerifier) =>
    signInWithPhoneNumber(auth, phoneNumber, appVerifier);

  const updateUserPassword = (user, newPassword) =>
    updatePassword(user, newPassword);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    showLoginModal,
    setShowLoginModal,
    register,
    login,
    loginWithGoogle,
    logout,
    resetPasswordByEmail,
    sendPhoneOTP,
    updateUserPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4 p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Loading...
            </p>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};