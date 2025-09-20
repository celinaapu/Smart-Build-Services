import background from "@/app/assets/images/otpbg.svg";

const FindArtisanOrClient = () => {
  return (
    <div
      className="bg-cover hidden md:flex lg:flex bg-eaa-purple-300 bg-center min-h-screen items-center justify-center p-8"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Find your <span className="text-eaa-green-300">Artisan</span> and{" "}
          <span className="text-eaa-green-300">Client</span> anywhere
        </h1>
        <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
          What services do you need? You are just a search away from finding the
          right artisan near you.
        </p>
      </div>
    </div>
  );
};

export default FindArtisanOrClient;
