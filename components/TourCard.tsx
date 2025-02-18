const TourCard = () => {
  return (
    <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 relative">
      {/* Background Image */}
      <div className="h-80 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat relative"></div>

      {/* Discount Badge */}
      <div className="absolute top-3 right-3 bg-white px-12 py-4 rounded-full flex items-center shadow-md">
        <span className="bg-teal-600 text-white text-xs font-bold px-2 py-[10px] rounded-full absolute -left-3 w-16 text-center">
          Up to 10%
        </span>
        <span className="ml-2 text-gray-700 text-sm">Discount</span>
      </div>

      {/* Transparent Floating Info Box */}
      <div className="absolute bottom-0 left-0 w-full bg-[#146B83] bg-opacity-75 text-white p-5 border-t-2 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">Vietnam</span>
          </div>
          <div>
            <p className="text-sm text-gray-300">4 Days 3 Night</p>
            <p className="text-xl font-bold mt-2">BDT 28,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
