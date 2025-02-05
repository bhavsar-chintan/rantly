import DotLoader from "react-spinners/DotLoader";

const Loader = () => {
  return (
    <>
      <div
        className={`d-flex align-items-center justify-content-center`}
        style={{
          position: "absolute",
          zIndex: 99999,
          height: "100%",
          width: "100%",
          background: "rgba(0, 0, 0, 1)",
        }}
      >
        <DotLoader color="#fff" size={80} />
      </div>
    </>
  );
};
export default Loader;
