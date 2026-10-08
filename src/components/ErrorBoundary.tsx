import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-xs font-mono uppercase tracking-wider text-copper-600 mb-3">
            Błąd renderowania
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Coś poszło nie tak
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Spróbuj odświeżyć stronę lub wrócić na stronę główną.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-3 rounded-[2px] border border-gray-300 text-sm font-semibold"
            >
              Spróbuj ponownie
            </button>
            <Link
              to="/"
              className="px-6 py-3 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white text-sm font-semibold"
            >
              Strona główna
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
