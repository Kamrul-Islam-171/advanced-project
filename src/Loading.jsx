import { ScaleLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className="flex justify-center min-h-[calc(100vh-116px)] items-center">
            <ScaleLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;