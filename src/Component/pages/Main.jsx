import { useEffect} from "react";
import FootContent from "../molecules/FootContent";
import HeadContent from "../molecules/HeadContent";
import MainContent from "../molecules/MainContent";
import CardZoom from "../molecules/CardZoom";
import { useMainAPIStore } from "../stores/ApiStrore";

function Main() {

    const {mainApi, fetchMainApi} = useMainAPIStore();

    useEffect(() => {
        fetchMainApi()
    }, [mainApi, fetchMainApi])

    return (
        <div className="w-full h-screen">
            <HeadContent />
            <MainContent />
            <FootContent />
            <CardZoom />
        </div>
    )
}

export default Main;