import ItemStats from "./ItemStats";
import { useButtonStore, useClickItemStore} from "../stores/ApiStrore";

function CardItem({ item }) {

    const {fetchDataClick} = useClickItemStore();
    const {fetchDataButton} = useButtonStore();

    function handleClick() {
        fetchDataClick(item?.id);
        fetchDataButton(true);
    }

    return (
        <div className="w-full md:w-[300px] h-fit bg-white flex flex-col justify-center align-middle p-4 rounded-lg shadow-md cursor-pointer" onClick={handleClick}>
            <div className="flex justify-center min-h-[90px] min-w-[90px]">
                <img className="h-[80px] w-[80px] hover:h-[90px] hover:w-[90px] drop-shadow-2xl" src={item?.sprites?.other?.dream_world?.front_default} alt="gambar" />
            </div>
            <p className="text-center uppercase font-poppins font-bold text-blue-500">{item?.name}</p>
            <div>
                {
                    item?.stats.map((item, index) => (
                        <ItemStats item={item} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default CardItem;