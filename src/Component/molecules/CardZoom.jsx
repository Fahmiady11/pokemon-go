import { useEffect, useState } from "react";
import { useButtonStore, useClickItemStore } from "../stores/ApiStrore";
import ItemStats from "../atoms/ItemStats";

function CardZoom() {

    const [loading, setLoading] = useState(false);

    const { dataClick} = useClickItemStore();

    const { dataButton, fetchDataButton } = useButtonStore();

    const handleClose = () => {
        fetchDataButton(false);
    };

    useEffect(() => {
        setLoading(true);
        setInterval(() => {
            setLoading(false);
        }, 1000);
    }, [dataClick]);

    if (!dataButton) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full min-h-screen bg-black bg-opacity-50">
            <div className="shadow-lg rounded-lg border-2 border-gray-300 w-[90%] max-w-[500px] h-[80%] max-h-[800px] flex flex-col bg-white relative">
                <button
                    onClick={handleClose}
                    className="absolute top-2 text-4xl right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    &times;
                </button>

                <div className="h-[40%] flex justify-center items-center p-4">
                    {
                        loading ? (
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
                        ) : (
                            <img
                                src={dataClick?.sprites?.other?.dream_world?.front_default}
                                alt={dataClick?.name}
                                className="w-4/5 h-4/5 object-contain"
                            />
                        )
                    }
                </div>
                <div className="flex-1 p-4 flex flex-col justify-start items-center">
                    <p className="font-poppins font-bold text-gray-800 uppercase text-4xl">{dataClick?.name}</p>
                    
                    <div className="w-full flex justify-between flex-col text-2xl gap-3 mt-14 p-4">
                        {
                            dataClick?.stats?.map((item, index) => (
                                <ItemStats item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardZoom;