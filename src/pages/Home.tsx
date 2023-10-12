import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-44 pb-20 ">
            <div className=" p-3 ">
              <Link to="/" className=" font-extrabold">
                BondiAI
              </Link>
            </div>
            <div className="flex flex-col  font-bold justify-center gap-[20.54rem]">
              <div className="flex flex-col  font-bold justify-center gap-5">
                <div className="flex flex-row gap-2 items-center  hover:bg-[#FBF9FE1A] py-3 px-12">
                  <img src="/assets/music.png" alt=" music" />
                  <p>Songs</p>
                </div>
                <div className="flex flex-row gap-2 items-center  hover:bg-[#FBF9FE1A] py-3 px-12">
                  <img src="/assets/artists.png" alt="artists" />

                  <p>Artists</p>
                </div>
                <div className="flex flex-row gap-2 items-center  hover:bg-[#FBF9FE1A] py-3 px-12">
                  <img src="/assets/playlist.png" alt=" playlist" />

                  <p>Albums</p>
                </div>
                <div className="flex flex-row gap-2 items-center  hover:bg-[#FBF9FE1A] py-3 px-12">
                  <img src="/assets/favorite.png" alt=" favorite" />

                  <p>Favorites</p>
                </div>
                <div className="flex flex-row gap-2 items-center  hover:bg-[#FBF9FE1A] py-3 px-12">
                  <img src="/assets/recent.png" alt="recent" />

                  <p>Recents</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 ml-12 font-bold">
                <img src="/assets/logout.png" alt="logout" />
                <p>Logout</p>
              </div>
            </div>
          </div>
          <div>
            {/* //TODO: MAKE OTHER PART FOR NEXT TIME */}
            dkj;aldkj;aldsj;ajs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
