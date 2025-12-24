import Container from "@/components/container";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-linear-to-b from-blue-50 via-blue-100 to-blue-100">
      
      <div className="w-full h-200 absolute -top-20 flex justify-center">
        <div className="w-175 h-120 rounded-b-full blur-3xl bg-linear-to-t from-blue-50 via-blue-0 to-white" />
      </div>

      <Container className="relative z-10">
        {/* <div className="border-x "> */}
        <Navbar />
        <Hero />
        {/* </div> */}
      </Container>
    </div>
  );
}

