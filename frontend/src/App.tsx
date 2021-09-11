import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">analise de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5>grafico de barras</h5>
            <BarChart/>
          </div>
        </div>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5>grafico de rosca</h5>
            <DonutChart/>
          </div>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
