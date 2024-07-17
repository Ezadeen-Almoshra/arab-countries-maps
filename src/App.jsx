import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Maps from "./Components/Maps";
import "leaflet/dist/leaflet.css";
import Timer from "./Components/Timer";
import Footer from "./Components/Footer";
import Swal from "sweetalert2";
import WinComponent from "./Components/Confetti";

function App() {
  const [win, setWin] = useState(() => {
    const win = localStorage.getItem("win");
    return win == 1 ? true : false;
  });
  
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTimeLeft = localStorage.getItem("timeLeft");
    return savedTimeLeft ? parseInt(savedTimeLeft, 10) : 240;
  });
  useEffect(() => {
    const showmsg = localStorage.getItem("showmsg");
    if (!showmsg) {
      Swal.fire({
        title:
          " تحدي  الدول العربية هي لعبة ترفيهية تفاعلية تهدف إلى اختبار معرفة اللاعبين بجغرافيا الدول العربية بطريقة ممتعة ومثيرة. في هذه اللعبة، يُطلب من اللاعبين إدخال أسماء الدول العربية خلال اربع دقائق . إذا تم إدخال اسم الدولة بشكل صحيح، ستظهر الدولة مباشرة على الخريطة، مما يساعد اللاعبين على رؤية موقعها الجغرافي الدقيق",
        icon: "question",
        iconHtml: "؟",
        confirmButtonText: "استمرار",
        showCancelButton: false,
        showCloseButton: false,
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeLeft(240);
          localStorage.setItem("showmsg", 1);
        }
      });
    }
  }, []);
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="flex-1">
        {win && <WinComponent />}
        <Timer setTimeLeft={setTimeLeft} timeLeft={timeLeft} />
        <Maps timeLeft={timeLeft} setTimeLeft={setTimeLeft} setWin={setWin} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
