import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Wrapper>
      {/* heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for your Miles
            </div>
          <div className="text-md md:text-xl">
            A lightweight Nike Zoomx midsole is combined 
            with increase stack height to help 
            provide cushioning during extended stretches of running
            </div>
        </div>
      {/* heading and paragraph start */}

      {/* product listing */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-5 my-3 px-5 md:px-0">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      </Wrapper>


    </div>
  );
}
