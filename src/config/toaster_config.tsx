import { Toaster } from "react-hot-toast";

const ToasterConfig = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 3000,
        removeDelay: 1000,
        style: {
          background: "white",
          color: "black",
        },

        // Default options for specific types
        success: {
          duration: 3000,
          iconTheme: {
            primary: "green",
            secondary: "white",
          },
        },

        error: {
          duration: 3000,
          iconTheme: {
            primary: "red",
            secondary: "black",
          },
        },

        loading: {
          //   duration: 3000,
          iconTheme: {
            primary: "orange",
            secondary: "white",
          },
        },
      }}
    />
  );
};

export default ToasterConfig;
