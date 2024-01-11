import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err = useRouteError()
    return (
        <div className='container  min-h-screen flex items-center justify-center'>
            <div className="main">
                <h1 className='text-2xl '>Opps!!</h1>
                <h3 className='text-xl'>The page your are trying to access is not found</h3>
                <h3 className='text-xl text-red-500'>{err.status}: {err.statusText}</h3>
            </div>
        </div>
    )
}

export default ErrorPage