import Header from "./header/Header.jsx";
import Hero from "./hero/Hero.jsx";
import DevSection from "./developers/Developers.jsx";
import ListsOfJobs from "./jobLists/BrowseJobs.jsx";
import MyFooter from "./footer/Footer.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Hero
        title="Browse Job"
        subtitle="Jobstreet: Jobs in Indonesia - Search Job Vacancies - Career"
      />
      <DevSection />

      <ListsOfJobs />

      <MyFooter />
    </>
  );
};
export default App;
