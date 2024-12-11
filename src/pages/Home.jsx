import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Form from "@/components/Form";

function Home() {
  return (
    <div className=" min-h-screen W-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
      <Header />
      <div className="grid grid-cols-8">
        <div className="col-span-2 hidden  md:block">
            <Aside />
        </div>
        <div className="md:col-span-6 col-span-full md:bg-lime-400 rounded-lg p-4 md:p-8">
            <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
