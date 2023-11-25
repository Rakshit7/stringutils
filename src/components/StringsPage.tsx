import Header from "./Header";
import LandingPage from "./LandingPage";
import StringInput from "./StringInput";

const StringsPage = () => {
  return (
    <>
      <Header />
      {window.localStorage.getItem("username") ? (
        <StringInput />
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export default StringsPage;
