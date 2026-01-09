import React, { useState, useEffect } from 'react';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './components/Home/HomePage';
import PrintLayout from './components/Shared/PrintLayout';
import { mockProblems } from './data/mockData';

function App() {
  const [selectedProblemId, setSelectedProblemId] = useState(null);

  // Check for URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const problemId = params.get('problemId');
    if (problemId) {
      setSelectedProblemId(problemId);
    }
  }, []);

  const handleSelectProblem = (id) => {
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
      <div style={{ background: 'white', minHeight: '100vh', position: 'relative' }}>
        {/* Control Bar for Print View */}
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          gap: '10px'
        }} className="no-print">
          <button
            onClick={() => window.print()}
            style={{
              padding: '10px 20px',
              background: '#228be6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            🖨️ 印刷する
          </button>
          <button
            onClick={() => window.close()}
            style={{
              padding: '10px 20px',
              background: '#fa5252',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            閉じる
          </button>
        </div>

        {/* Inject print hide styles */}
        <style>{`
                @media print {
                    .no-print { display: none !important; }
                }
            `}</style>

        <PrintLayout problem={selectedProblem} />
      </div>
    );
  }

  return (
    <>
      {!selectedProblemId ? (
        <HomePage onSelectProblem={handleSelectProblem} />
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
