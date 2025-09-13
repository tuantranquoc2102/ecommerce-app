import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import OrdersPage from "./pages/Orders";
import ProductsPage from "./pages/Products";
import CreateProduct from "./pages/ProductNew";
import CategoriesPage from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import CustomersPage from "./pages/Customers";
import CreateCustomer from "./pages/CustomerNew";
import CustomerDetailPage from "./pages/CustomerDetail";
import ReportsPage from "./pages/Reports";
import CouponsPage from "./pages/Coupons";
import CreateCouponPage from "./pages/CouponNew";
import InboxPage from "./pages/Inbox";
import PersonalSettings from "./pages/PersonalSettings";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* Auth routes (không có Layout) */}
    //     <Route path="/login" element={<LoginPage />} />
    //   </Routes>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Dashboard />} />
    //       <Route path="/orders" element={<OrdersPage />} />
    //       <Route path="/products" element={<ProductsPage />} />
    //       <Route path="/products/new" element={<CreateProduct />} />
    //       <Route path="/categories" element={<CategoriesPage />} />
    //       <Route path="/categories/:id" element={<CategoryDetail />} />
    //       <Route path="/customers" element={<CustomersPage />} />
    //       <Route path="/customers/new" element={<CreateCustomer />} />
    //       <Route path="/customers/:id" element={<CustomerDetailPage />} />
    //       <Route path="/reports" element={<ReportsPage />} />
    //       <Route path="/coupons" element={<CouponsPage />} />
    //       <Route path="/coupons/new" element={<CreateCouponPage />} />
    //       <Route path="/inbox" element={<InboxPage />} />
    //       <Route path="/personalsettings" element={<PersonalSettings />} />
    //     </Routes>
    //   </Layout>
      
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        {/* Auth routes (không có Layout) */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin routes (bọc Layout) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/new" element={<CreateProduct />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<CategoryDetail />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/customers/new" element={<CreateCustomer />} />
          <Route path="/customers/:id" element={<CustomerDetailPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/coupons" element={<CouponsPage />} />
          <Route path="/coupons/new" element={<CreateCouponPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/personalsettings" element={<PersonalSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;