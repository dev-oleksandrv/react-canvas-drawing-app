import Canvas from './components/Canvas/Canvas.tsx';
import FloatControls from './components/FloatControls/FloatControls.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden">
      <Navbar />

      <section className="relative flex-1">
        <Canvas />
      </section>

      <FloatControls />
    </main>
  );
}

export default App;
