import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);

  // Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);
  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="container mx-auto flex flex-col lg:flex-row items-center mt-20 md:mt-40 px-2">
        <div className="w-full xl:w-1/2 text-center lg:text-left md:pr-8 mb-10 md:mb-40 flex-col">
          <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di Jago Catat
          </h1>
          <p className="text-lg mb-6">
            Jago Catat adalah aplikasi sederhana yang memungkinkan Anda untuk
            menyimpan, mengelola, dan mencari catatan Anda dengan mudah. Dengan
            fitur-fitur yang intuitif dan user-friendly, Anda bisa fokus pada
            ide-ide Anda tanpa khawatir kehilangannya.
          </p>
          <p className="text-lg mb-10">
            Mulai sekarang, simpan semua catatan penting Anda di satu tempat.
          </p>
          <a
            href="/signup"
            className="btn-primary w-40 px-10 text-xl"
            type="submit"
          >
            Buat Akun
          </a>
        </div>
        <div className="w-full xl:w-1/2 flex justify-center items-center mb-10 md:mb-40">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Note App"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
