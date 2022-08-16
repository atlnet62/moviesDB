import './App.css';
import Header from './components/containers/Header';
import Footer from  './components/containers/Footer';
import Section from './components/containers/Section';

function App() {

    return (
        <>
            <Header />

            <main>
                <Section nameClass="Search" />
    
                <Section nameClass= "Film" title="Voici la liste des films tendances de la semaine!" />

                {/* <Section nameClass="searchArea" /> */}
            </main>

            <Footer />

        </>
    );
}


export default App;
