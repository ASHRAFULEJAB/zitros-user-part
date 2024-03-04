import grocery from "../../assets/images/grocery.png";
import mobile from "../../assets/images/mobile.jpg";
import health from "../../assets/images/health.png";
import vedios from "../../assets/images/game.png";
import beauty from "../../assets/images/shopping.png";
import giftcards from "../../assets/images/gift.png";

const TopHeroSection = () => {
  return (
    <div className="flex flex-1 justify-between items-center justify-center">
      <div className="max-w-[160px] rounded overflow-hidden">
        <img
          className="w-full h-20"
          src={grocery}
          alt="Sunset in the mountains"
        />
        <div className="px-6">
          <div className="font-bold text-normal mb-2 ml-0">Grocery</div>
        </div>
      </div>
      <div className="max-w-[160px] rounded overflow-hidden">
        <img
          className="w-full h-20"
          src={mobile}
          alt="Sunset in the mountains"
        />
        <div className="px-6">
          <div className="font-bold text-normal mb-2 ">Mobile</div>
        </div>
      </div>
      <div className="max-w-[160px] rounded overflow-hidden">
        <img
          className="w-full h-20"
          src={health}
          alt="Sunset in the mountains"
        />
        <div className="px-6">
          <div className="font-bold text-normal mb-2 ">Health</div>
        </div>
      </div>
      <div className="max-w-[160px] rounded overflow-hidden">
        <img
          className="w-full h-20"
          src={vedios}
          alt="Sunset in the mountains"
        />
        <div className="px-6">
          <div className="font-bold text-normal mb-2 ">Vedio Games</div>
        </div>
      </div>
      <div className="max-w-[160px] rounded overflow-hidden">
        <img
          className="w-full h-20"
          src={beauty}
          alt="Sunset in the mountains"
        />
        <div className="px-6">
          <div className="font-bold text-normal mb-2  text-nowrap">
            Beauty,toy & more
          </div>
        </div>
      </div>
      <div className="max-w-[160px] rounded overflow-hidden">
        <img
          className="w-full h-20"
          src={giftcards}
          alt="Sunset in the mountains"
        />
        <div className="px-6">
          <div className="font-bold text-normal mb-2 ">Gift cards</div>
        </div>
      </div>
    </div>
  );
};

export default TopHeroSection;
