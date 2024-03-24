
import componentsImg from './assets/components.png';
import Header from './components/Header/Heeader.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

// npm run dev
function App() {
    return (
        // Fragments div 대신 사용 가능 (상위 root가 있어서 div>div라 div대신 사용) <Fragments></Fragments> import해야함
        <>
            <Header/>
            <main>
                <CoreConcepts />
                <Examples/>
            </main>
        </>
    );
}

export default App;
