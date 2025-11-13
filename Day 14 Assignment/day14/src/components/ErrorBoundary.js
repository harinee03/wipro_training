import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo);
    this.logErrorToService(error, errorInfo);
  }
  logErrorToService = (error, errorInfo) => {
  
    const errorData = {
      error: error?.toString() || 'Unknown error',
      stack: errorInfo?.componentStack || 'No stack trace available',
      timestamp: new Date().toISOString(),
      url: window.location.href
    };
    
    console.log('Sending to monitoring service:', errorData);

  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Something went wrong!</h4>
          <p>We're sorry, but something went wrong. Please try again.</p>
          
          {}
          <details className="mb-3">
            <summary>Error Details</summary>
            <pre className="mt-2 small">
              {this.state.error ? this.state.error.toString() : 'Unknown error occurred'}
              {'\n\n'}
              {this.state.errorInfo?.componentStack || 'No component stack available'}
            </pre>
          </details>
          
          <button 
            className="btn btn-primary"
            onClick={this.handleRetry}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;