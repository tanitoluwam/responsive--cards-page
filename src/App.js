import "./App.css";
import { Card } from "./components/Card";
import { CalculatorIcon, KarmaIcon, SupervisorIcon, TeamIcon } from "./components/vectors";

function App() {
  return (
    <div className="w-100 max-w-screen-xl mx-auto pt-10">
      <div className="text-center">
        <p className="text-primary-100 text-3xl font-thin">
          Reliable, efficient delivery
        </p>
        <h3 className="text-primary-200 text-3xl mb-3.5 font-extrabold">
          Powered by Technology
        </h3>
        <p className="text-primary-100 text-base w-4/5 sm:w-2/5 mx-auto">
          Our Artificial Intelligence powered tools use millions of project
          datas points to ensure that your project is successful
        </p>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:space-x-8 justify-center items-center py-10">
        <Card
          title= "Supervisor"
          content= "Scans our talent network to create the optimal team for your project" 
          icon= {<SupervisorIcon />}
          borderColor="#45d3d3"
        />
        <div className="flex flex-col">
          <div className="mb-8 mt-8">
            <Card
              title= "Team Builder"
              content= "Scans our talent network to create the optimal team for your project" 
              icon={<TeamIcon />}
              borderColor="#eb5454"
            />
          </div>
          <div class= "mb-8">
          <Card
            title="Karma"
            content="Regularly evaluates our talent to ensure quality" 
            icon={<KarmaIcon />}
            borderColor="#fcaf4a"
          />
          </div>
        </div>
        <Card
          title="Calculator"
          content="Uses data from past projects to provide better delivery estimates" 
          icon={<CalculatorIcon />}
          borderColor="#549ef2"
        />
      </div>
    </div>
  );
}

export default App;
