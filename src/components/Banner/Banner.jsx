import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="hero max-h-[554px] bg-base-200 px-28 pt-12 mb-24">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold text-[#131313] mb-12 play-fair">
            Books to freshen up your bookshelf
          </h1>

          <Link to={"/listedbooks"}>
            <button className="btn work-sans btn-primary bg-[#23BE0A] hover:bg-[#59dc45] border-none ">
              View The List
            </button>
          </Link>
        </div>
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
