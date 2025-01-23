import LeftBranchA from "./LeftBranchA.tsx";


const LeftBranch = () => {
    return (
        <div className="p-4 bg-white dark:bg-gray-700 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Left Branch</h2>
            <LeftBranchA/>
        </div>
    );
};

export default LeftBranch;