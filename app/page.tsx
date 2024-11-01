import Image from "next/image";
import ProblemsTable from "./components/ProblemsTable";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ProblemsTable/>
    </div>
  );
}
