const Login = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div className="text-center p-5 pb-10 border-2 border border-lgray rounded-lg">
            <h1 className="text-3xl p-3">Login</h1>
            <div className="p-1 block">
                <input className="border-lgray border rounded-lg px-4 py-2 hover:bg-mgray focus:bg-mgray" type="text" placeholder="Username" />
            </div>
            <div className="p-1 block">
                <input className="border-lgray border rounded-lg px-4 py-2 hover:bg-mgray focus:bg-mgray" type="password" placeholder="Password" />
            </div>
            </div>
        </div>
    );
};

export default Login