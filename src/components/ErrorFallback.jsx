function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="rounded border border-red-300 bg-red-50 p-4">
            <p className="font-bold">ERROR FOUND: BOUNDARIES</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Retry</button>
        </div>
    );
}
  
  export default ErrorFallback;
  
  