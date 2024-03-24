import { Link } from "react-router-dom";

const Empty = ({ msg, address, level }) => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex items-center justify-center flex-col">
            <h1>{msg}</h1>

            <Link to={`/${address}`} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">BookMarks</span>
            </Link>

        </div>
    );
};

export default Empty;