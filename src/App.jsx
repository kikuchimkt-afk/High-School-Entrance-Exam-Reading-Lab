import React, { useState, useEffect } from 'react';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './components/Home/HomePage';
import PrintLayout from './components/Shared/PrintLayout';
import { mockProblems } from './data/mockData';

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("PrintLayout Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
          <h2 style={{ color: '#e03131' }}>印刷プレビューの読み込みエラー</h2>
          <p>データの読み込み中に問題が発生しました。</p>
          <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '4px', border: '1px solid #dee2e6', marginTop: '10px' }}>
            <code>{this.state.error && this.state.error.toString()}</code>
          </div>
          <button
            onClick={() => window.close()}
            style={{ marginTop: '20px', padding: '8px 16px', background: '#495057', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            閉じる
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [selectedProblemId, setSelectedProblemId] = useState(null);
  const [homeCategory, setHomeCategory] = useState('中3');

  // Lifted Home Page States
  const [searchTags, setSearchTags] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [searchMode, setSearchMode] = useState('OR');
  const [homeScrollY, setHomeScrollY] = useState(0);

  // Print preview settings
  const [printScale, setPrintScale] = useState(100);
  const [printMargin, setPrintMargin] = useState(10);
  const [showBackground, setShowBackground] = useState(false);

  // Check for URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const problemId = params.get('problemId');
    if (problemId) {
      setSelectedProblemId(problemId);
    }
  }, []);

  const handleSelectProblem = (id) => {
    setHomeScrollY(window.scrollY);
    setSelectedProblemId(id);
  };

  const handleBackToHome = () => {
    setSelectedProblemId(null);
    window.history.pushState({}, '', '/');
  };

  // Find the selected problem data
  const selectedProblem = mockProblems.find(p => p.id === selectedProblemId);

  // Define isPrintMode
  const isPrintMode = new URLSearchParams(window.location.search).get('mode') === 'print';

  // If in print mode, render ONLY the PrintLayout
  if (isPrintMode && selectedProblem) {
    return (
      <div style={{ background: showBackground ? '#555' : 'white', minHeight: '100vh', position: 'relative' }}>
        {/* Control Bar for Print View */}
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: 1000,
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '10px 20px',
          background: '#f0f0f0',
          borderBottom: '1px solid #ccc'
        }} className="no-print">
          {/* Scale Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'white', padding: '5px 10px', borderRadius: '5px', border: '1px solid #ddd' }}>
            <button onClick={() => setPrintScale(Math.max(50, printScale - 5))} style={{ width: '28px', height: '28px', border: '1px solid #ccc', background: '#f3f4f6', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>−</button>
            <span>サイズ: {printScale}%</span>
            <input type="range" min="50" max="150" value={printScale} onChange={e => setPrintScale(Number(e.target.value))} style={{ width: '80px' }} />
            <button onClick={() => setPrintScale(Math.min(150, printScale + 5))} style={{ width: '28px', height: '28px', border: '1px solid #ccc', background: '#f3f4f6', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
          </div>
          {/* Margin Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'white', padding: '5px 10px', borderRadius: '5px', border: '1px solid #ddd' }}>
            <label>余白:</label>
            <select value={printMargin} onChange={e => setPrintMargin(Number(e.target.value))} style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value={0}>なし</option>
              <option value={5}>狭い</option>
              <option value={10}>普通</option>
              <option value={15}>広い</option>
            </select>
          </div>
          {/* Background Toggle */}
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'white', padding: '5px 10px', borderRadius: '5px', border: '1px solid #ddd', cursor: 'pointer' }}>
            <input type="checkbox" checked={showBackground} onChange={e => setShowBackground(e.target.checked)} />
            背景を表示
          </label>
          {/* Buttons */}
          <button
            onClick={() => window.print()}
            style={{
              padding: '8px 16px',
              background: '#228be6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            🖨️ 印刷
          </button>
          <button
            onClick={() => window.close()}
            style={{
              padding: '8px 16px',
              background: '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            ✕ 閉じる
          </button>
        </div>

        {/* Inject print hide styles */}
        <style>{`
                @media print {
                    .no-print { display: none !important; }
                }
            `}</style>

        {/* Scale Container */}
        <div style={{
          transform: `scale(${printScale / 100})`,
          transformOrigin: 'top left',
          width: `${10000 / printScale}%`,
          padding: `${printMargin}mm ${printMargin + 2}mm`,
          paddingTop: '60px',
          boxSizing: 'border-box'
        }}>
          <ErrorBoundary>
            <PrintLayout problem={selectedProblem} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }

  return (
    <>
      {!selectedProblemId ? (
        <HomePage
          onSelectProblem={handleSelectProblem}
          selectedGrade={homeCategory}
          onSelectGrade={setHomeCategory}
          searchTags={searchTags}
          setSearchTags={setSearchTags}
          textInput={textInput}
          setTextInput={setTextInput}
          searchMode={searchMode}
          setSearchMode={setSearchMode}
          homeScrollY={homeScrollY}
        />
      ) : (
        <MainLayout
          problem={selectedProblem}
          onBack={handleBackToHome}
        />
      )}
    </>
  );
}

export default App;
