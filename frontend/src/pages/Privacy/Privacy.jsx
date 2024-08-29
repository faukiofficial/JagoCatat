import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";

const Privacy = () => {
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
      <div className="container mx-auto px-10 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-6">Kebijakan Privasi</h1>
        <p className="mb-4">
          Selamat datang di JagoCatat! Kebijakan Privasi ini menjelaskan
          bagaimana kami mengumpulkan, menggunakan, dan membagikan informasi
          Anda ketika Anda menggunakan aplikasi Note App kami. Dengan
          menggunakan layanan kami, Anda setuju dengan pengumpulan dan
          penggunaan informasi sesuai dengan kebijakan ini.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          1. Informasi yang Kami Kumpulkan
        </h2>
        <p className="mb-4">
          Ketika Anda menggunakan JagoCatat, kami mungkin mengumpulkan jenis
          informasi berikut:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Informasi Pribadi:</strong> Seperti nama, alamat email, dan
            informasi lain yang Anda berikan saat melakukan pendaftaran.
          </li>
          <li>
            <strong>Data Penggunaan:</strong> Informasi tentang bagaimana Anda
            menggunakan aplikasi, termasuk interaksi, preferensi, dan konten
            catatan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          2. Bagaimana Kami Menggunakan Informasi Anda
        </h2>
        <p className="mb-4">Informasi yang kami kumpulkan digunakan untuk:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Menyediakan, memelihara, dan meningkatkan layanan kami.</li>
          <li>
            Mempersonalisasi pengalaman Anda dan menyediakan konten yang
            relevan.
          </li>
          <li>
            Berkomunikasi dengan Anda, termasuk mengirimkan pembaruan dan
            pemberitahuan.
          </li>
          <li>Menjaga keamanan dan integritas layanan kami.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          3. Berbagi Informasi Anda
        </h2>
        <p className="mb-4">
          Kami tidak membagikan informasi pribadi Anda dengan pihak ketiga
          kecuali dalam kasus berikut:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Dengan persetujuan Anda atau atas arahan Anda.</li>
          <li>
            Untuk alasan hukum, seperti mematuhi undang-undang, peraturan, atau
            permintaan hukum.
          </li>
          <li>
            Untuk melindungi hak, properti, dan keselamatan JagoCatat, pengguna
            kami, atau pihak lain.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Keamanan Data</h2>
        <p className="mb-4">
          Kami sangat memperhatikan keamanan data dan menerapkan langkah-langkah
          yang sesuai untuk melindungi informasi Anda. Namun, tidak ada metode
          transmisi melalui internet atau penyimpanan elektronik yang 100% aman,
          sehingga kami tidak dapat menjamin keamanan mutlaknya.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Hak-Hak Anda</h2>
        <p className="mb-4">
          Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
          informasi pribadi Anda kapan saja. Jika Anda ingin menggunakan hak-hak
          ini, silakan hubungi kami.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          6. Perubahan pada Kebijakan Privasi Ini
        </h2>
        <p className="mb-4">
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami
          akan memberi tahu Anda tentang setiap perubahan dengan memposting
          Kebijakan Privasi yang baru di halaman ini. Penggunaan berkelanjutan
          Anda terhadap aplikasi setelah adanya perubahan pada Kebijakan Privasi
          menunjukkan bahwa Anda menerima perubahan tersebut.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Hubungi Kami</h2>
        <p className="mb-20">
          Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan
          Privasi ini, jangan ragu untuk menghubungi kami.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
