import background from "@/app/assets/images/otpbg.svg";
const FindArtisanOrClient = () => {
  return (
    <div
      className="bg-cover hidden lg:flex bg-eaa-purple-300 bg-center h-screen items-center justify-center"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="max-w-[27rem] text-center text-white">
        <h1 className="text-[2.25rem] font-bold">
          Find your <span className="text-eaa-green-300">Artisan</span> and{" "}
          <span className="text-eaa-green-300">Client</span> anywhere
        </h1>
        <p className="text-[1rem]  mt-5 px-[4rem]">
          What services do you need? you are just a search away from finding the
          right artisan near you
        </p>
      </div>
    </div>
  );
};

export default FindArtisanOrClient;
