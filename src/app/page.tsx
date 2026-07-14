import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Features/>
      <Categories/>
      <Testimonials/>
      <Newsletter/>
    </div>
  );
}
