import { imageConfigDefault } from "next/dist/server/image-config";
import img from "next/image";
function Header() {
    return (
        <div>
            
          <div className="flex justify-between max-w-6xl">
           <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
            <img
             src="https://links.papareact.com/ocw" 
             layout="fill"
            objectFit="contain"
            />
            </div>
            
            <div className="relative w-2 h-10 lg:hidden flex-shrink-0 cursor-pointer">
            <img
            src="https://links.papareact.com/jjm" 
            layout="fill"
            objectFit="contain"
            />
           </div>
            <div>
                <dev>
                    
                </dev>
                <input type="text" placeholder="Search" />
            </div>
            </div>
        </div>
    );
}

export default Header;
