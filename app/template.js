// "use client";
// import React, { Suspense } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Loader from "./components/common/loader/Loader";
// import Navbar from "./components/layout/navbar-section/Navbar";
// // import FloatingIcon from "./components/common/floating-icon/FloatingIcon";
// // import Footer from "./components/layout/footer-section/Footer";
// // Lazy load components that are not essential for initial page render
// const FloatingIcon = React.lazy(() =>
//   import("./components/common/floating-icon/FloatingIcon")
// );
// const Footer = React.lazy(() =>
//   import("./components/layout/footer-section/Footer")
// );

// export default function Template({ children }) {
//   return (
//     <div className="layout-container">
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss={false}
//         draggable
//         pauseOnHover={false}
//         theme="light"
//       />
//       <Navbar />
//       <Suspense fallback={"loading"}>
//         <main>{children}</main>
//         <FloatingIcon />
//         <Footer />
//       </Suspense>
//     </div>
//   );
// }

"use client";

import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/common/loader/Loader";
import Navbar from "./components/layout/navbar-section/Navbar";
import dynamic from "next/dynamic";

// Dynamic imports for lazy loading
const FloatingIcon = dynamic(
  () => import("./components/common/floating-icon/FloatingIcon"),
  {
    ssr: false,
    loading: () => <div>Loading FloatingIcon...</div>,
  }
);
const Footer = dynamic(
  () => import("./components/layout/footer-section/Footer"),
  {
    ssr: false,
    loading: () => <div>Loading Footer...</div>,
  }
);

// Main Template Component
export default function Template({ children }) {
  return (
    <div className="layout-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Suspense fallback={<Loader />}>
        <Navbar />
        <main>{children}</main>
        <FloatingIcon />
        <Footer />
      </Suspense>
    </div>
  );
}
