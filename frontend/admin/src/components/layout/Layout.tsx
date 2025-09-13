import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

// export default function Layout({ children }: { children: ReactNode }) {
//   return (
//     <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <main className="flex-1 bg-slate-50 p-6 overflow-y-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

export default function Layout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-slate-50 p-6 overflow-y-auto">
          <Outlet /> {/* nơi render các page con */}
        </main>
      </div>
    </div>
  );
}