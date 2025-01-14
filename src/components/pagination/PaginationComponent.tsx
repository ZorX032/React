import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({pg: '1'});
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div className="flex gap-4">
            <button onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({pg: (--currentPage).toString()});
                }


            }} className="bg-black text-white rounded px-10 py-3 hover:bg-gray-800">Prev
            </button>
            <button onClick={() => {
                setSearchParams({page: (++currentPage).toString()});

            }} className="bg-black text-white rounded px-10 py-3 hover:bg-gray-800">Next
            </button>

        </div>

    );
};
export default PaginationComponent;