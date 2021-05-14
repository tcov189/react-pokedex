import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';

function App() {
  return (
    <div className="bg-blue-300 h-screen flex flex-col justify-between">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
