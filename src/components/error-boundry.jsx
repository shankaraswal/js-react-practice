import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Save error details in state
    this.setState({ error, errorInfo });
    // Also log it
    console.error("Error Boundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", backgroundColor: "#fee", color: "#900" }}>
          <h2>Something went wrong!</h2>
          {this.state.error && (
            <p>
              <strong>Error:</strong> {this.state.error.toString()}
            </p>
          )}
          {this.state.errorInfo && (
            <details style={{ whiteSpace: "pre-wrap" }}>
              <strong>Stack Trace:</strong> {this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
