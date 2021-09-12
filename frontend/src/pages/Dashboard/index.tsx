

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">analise de vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5>grafico de barras</h5>
                        <BarChart />
                    </div>
                </div>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5>grafico de rosca</h5>
                        <DonutChart />
                    </div>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;