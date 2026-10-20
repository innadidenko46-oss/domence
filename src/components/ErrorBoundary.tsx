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
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Coś poszło nie tak
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Spróbuj odświeżyć stronę albo wróć na stronę główną.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="btn-secondary"
            >
              Spróbuj ponownie
            </button>
            <Link
              to="/"
              className="btn-engineering-primary"
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
