import FloatControls from './components/FloatControls/FloatControls.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden">
      <Navbar />

      <section className="relative flex-1">
        <p>Canvas will be here</p>
      </section>

      <FloatControls />
    </main>
  );
}

export default App;
