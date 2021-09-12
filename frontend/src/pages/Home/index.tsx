import Footer from "components/footer"
import NavBar from "components/NavBar"

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <link className="btn btn-primary btn-lg"  to="Dashboard">
                        Acessar Dashboard
                    </link>
                </div>
            </div>
            <Footer />
        </>
        
    );
}

export default Home;