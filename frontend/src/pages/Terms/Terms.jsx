import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";

const Terms = () => {
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
      <div className="container mx-auto px-10 py-8 my-20">
        <h1 className="text-3xl font-bold mb-6">Syarat dan Ketentuan</h1>
        <p className="mb-4">
          Selamat datang di JagoCatat! Dengan mengakses dan menggunakan aplikasi
          kami, Anda setuju untuk terikat oleh syarat dan ketentuan yang
          berlaku. Harap baca syarat dan ketentuan berikut ini dengan cermat
          sebelum menggunakan aplikasi ini.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Penerimaan Syarat
        </h2>
        <p className="mb-4">
          Dengan mengakses dan menggunakan aplikasi JagoCatat, Anda menyatakan
          telah membaca, memahami, dan menyetujui semua syarat dan ketentuan
          yang tertera dalam halaman ini. Jika Anda tidak menyetujui salah satu
          atau seluruh syarat dan ketentuan ini, mohon untuk tidak menggunakan
          aplikasi ini.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Penggunaan Aplikasi
        </h2>
        <p className="mb-4">
          Aplikasi ini diperuntukkan bagi pengguna yang ingin mencatat dan
          mengelola informasi pribadi mereka. Anda dilarang menggunakan aplikasi
          ini untuk tujuan yang melanggar hukum, merugikan, atau merusak nama
          baik pihak lain. Kami berhak untuk menghentikan akses Anda ke aplikasi
          ini jika kami menemukan bahwa Anda telah melanggar syarat dan
          ketentuan ini.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Privasi</h2>
        <p className="mb-4">
          Kami menghargai privasi Anda. Informasi pribadi yang Anda berikan
          kepada kami melalui aplikasi ini akan kami lindungi sesuai dengan
          kebijakan privasi kami. Kami tidak akan menjual, menyewakan, atau
          menukar informasi pribadi Anda dengan pihak ketiga tanpa persetujuan
          Anda.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Hak Kekayaan Intelektual
        </h2>
        <p className="mb-4">
          Semua konten, merek dagang, logo, dan elemen lain yang terdapat dalam
          aplikasi JagoCatat adalah milik kami atau pihak ketiga yang telah
          memberikan lisensi kepada kami. Anda dilarang menggunakan
          elemen-elemen tersebut tanpa izin tertulis dari pemiliknya.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Pembatasan Tanggung Jawab
        </h2>
        <p className="mb-4">
          Kami tidak bertanggung jawab atas segala kerugian atau kerusakan yang
          timbul dari penggunaan aplikasi ini. Aplikasi ini disediakan {"apa adanya"} tanpa jaminan apa pun, baik tersurat maupun tersirat.
          Penggunaan aplikasi ini sepenuhnya merupakan risiko Anda sendiri.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Perubahan Syarat dan Ketentuan
        </h2>
        <p className="mb-4">
          Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja tanpa
          pemberitahuan terlebih dahulu. Anda diharapkan untuk memeriksa halaman
          ini secara berkala untuk memastikan bahwa Anda memahami syarat dan
          ketentuan yang berlaku.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          7. Hukum yang Berlaku
        </h2>
        <p className="mb-4">
          Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan hukum
          yang berlaku di Indonesia. Setiap perselisihan yang timbul dari atau
          terkait dengan syarat dan ketentuan ini akan diselesaikan di
          pengadilan yang berwenang di Indonesia.
        </p>

        <p className="mt-8">
          Terima kasih telah menggunakan JagoCatat. Jika Anda memiliki
          pertanyaan terkait syarat dan ketentuan ini, silakan hubungi kami
          melalui halaman kontak.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
