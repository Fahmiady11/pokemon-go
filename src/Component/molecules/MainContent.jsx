import CardItem from "../atoms/CardItem";
import { useEffect, useState } from "react";
import { useMainAPIStore, useSearchStore, useViewItemStore } from "../stores/ApiStrore";

function MainContent() {

    const [filteredState, setFilteredState] = useState([]);
    const { mainApi } = useMainAPIStore();
    const { dataSearch } = useSearchStore();
    const { dataView, fetchDataView } = useViewItemStore();

    useEffect(() => {
        mainApi.forEach((element) => {
            fetchDataView(element?.url)
        });
    }, [JSON.stringify(mainApi)]);

    useEffect(() => {
        const filtered = dataView.filter(item => item?.name.includes(dataSearch));
        setFilteredState(filtered);
    }, [dataView, dataSearch]);


    return (
        <div>
            <div className="w-full min-h-screen flex justify-center items-start p-10 mt-24">
                <div className="w-[75%] flex flex-row flex-wrap gap-4 justify-evenly p-4">
                    {filteredState.map((item, index) => (
                        <CardItem item={item} key={index} />
                    ))}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default MainContent;