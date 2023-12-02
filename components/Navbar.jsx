/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";
import { API_URL, DEFAULT_HEADER } from "@/lib/contants";
import Loader from "./Loader";
import Alert from "./Alert";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import { selectVisitorData } from "@/src/store/features/visitorSlice";

 
const Navbar = () => {
  const visitorData=useSelector(state=>state.visitor?.visitorData)
  const { data, isLoading, isError, error } = useQuery(
    "news-category",
    async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/zimomeet_app/news-category`,
          {
            headers: DEFAULT_HEADER
          }
        );
        return res.data.data.slice(1,9);
      } catch (error) {
        console.log('Error in Navbar:',error)
      }
     
    
    }
  );
  console.log('useSelector',visitorData)

// if(isLoading){
//   return <Spinner/>
// }
  return (  
    
   <div>
    {
      !isLoading &&  <div className="flex flex-col items-center space-y-4 ">
      <nav className="mb-10"> 
    <ul className={`md:flex md:items-center md:space-x-2  xl:flex xl:items-center  lg:space-x-3 xl:space-x-4 2xl:space-x-6  3xl:space-x-[22px]`}>
      <li className='flex'>
        <img
          className="w-[40px] h-[30px]  xl:w-[45px] xl:h-[33px]   3xl:w-[67px] 3xl:h-[50px] "
          src="/assets/NewsLogo.svg"
          alt=""
        />{" "}
        <img
          className="w-[40px] h-[30px]  xl:w-[65px] xl:h-[34px] 3xl:w-[86px] 3xl:h-[50px] "
          src="/assets/zimaNewsLogo.svg"
          alt=""
        />
      </li>

      { data.map((val, index) => {
        return (
          <div className="category category1" key={index}>
            <Link href={`${val.id}`}>
              <span className='min-[320px]:text-[10px] xl:text-[12px] 2xl:text-[14px] tracking-[2px]'>{val.name.toUpperCase()}</span>
            </Link>
            
          </div>
        );
      }) 
    
    }

      <li>
      <img src={visitorData.country.app_icon} className="w-[34px] h-[34px] xl:w-[45px] xl:h-[50px]" alt="" />

      </li>
    </ul>
  </nav>
    
    <Alert/>
    
  </div>
    }
   </div>
  
  );
};

export default Navbar;
