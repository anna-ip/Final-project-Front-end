import React from 'react'


class ErrorBoundary extends React.Component {
    state = { hasError: false }

    componentDidCatch(error, info) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        logErrorToService(error, info.componentStack)
    }

    render() {
        return this.state.hasError
            ? <FallbackComponent />
            : this.props.children
    }
}

export default ErrorBoundary