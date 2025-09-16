import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import AboutUsPage from "./pages/aboutusPage";
import LoginPage from "./pages/loginPage";
import ContactUsPage from "./pages/contactusPage";
import RegisterPage from "./pages/registerPage";
import AdminPage from "./pages/adminPage";
import TestPage from "./pages/testPage";
import { Toaster } from "react-hot-toast";
import ClientWebPage from "./pages/client/clientPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ForgetPasswordPage from "./pages/client/forgetPassword";
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
	

function App() {
	return (
		<BrowserRouter>
			<GoogleOAuthProvider clientId={clientId}>
				<div className="w-full h-screen flex justify-center items-center bg-primary text-secondary">
					<Toaster position="top-right" />
					<Routes path="/">
					    <Route path="/" element={<HomePage />} /> 
						<Route path="/about-us" element={<AboutUsPage />} />
						<Route path="/contact-us" element={<ContactUsPage />} />
                        <Route path="/login" element={<LoginPage />} />
						<Route path="/test" element={<TestPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/admin/*" element={<AdminPage />} />
						<Route path="/forget" element={<ForgetPasswordPage/>}/>
						<Route path="/*" element={<ClientWebPage />} />
					</Routes>
				</div>
			</GoogleOAuthProvider>
		</BrowserRouter>
	);
}

export default App;


