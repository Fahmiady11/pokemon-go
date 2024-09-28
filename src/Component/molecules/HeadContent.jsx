import Logo from '../../assets/logo.png';
import { useSearchStore } from '../stores/ApiStrore';

function HeadContent() {
    const {fetchDataSearch} = useSearchStore();
    return (
        <div className="w-full flex justify-between items-center px-12 py-4 shadow-lg fixed top-0 bg-white z-10">
            <div>
                <img src={Logo} className='w-28' alt='logo' />
            </div>
            <div>
                <input type="text" className='shadow-md border-[0.5px] rounded-md p-2 w-64' placeholder="Search" onChange={(e) => fetchDataSearch(e.target.value)}  />
            </div>
        </div>
    )
}

export default HeadContent;