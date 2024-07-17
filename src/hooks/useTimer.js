import { useEffect } from "react";
import Swal from "sweetalert2";
import successAudio from "/sound/SuccessSoundEFFECT.mp3";
import countries from "../data/countries";

 const audio = new Audio(successAudio);
export const useTimer = (
  timeLeft,
  setTimeLeft,
  country,
  setCountry,
  setWin,
  countries
) => {
  useEffect(() => {
    if (timeLeft == 0 && country?.length !== 22) {
      Swal.fire({
        title: ` انتهى الوقت حاول مرة اخرى -المدن المتبقية ${
          countries?.length - country?.length
        }`,
        icon: "question",
        iconHtml: "؟",
        confirmButtonText: "اعادة",
        showCancelButton: false,
        showCloseButton: false,
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeLeft(240);
          localStorage.setItem("timeLeft", 240);
          setCountry(null);
          localStorage.setItem("country", JSON.stringify(country));
          setWin(false);
          localStorage.setItem("win", 0);
        }
      });
      setTimeLeft(240);
      localStorage.setItem("timeLeft", 240);
      setCountry(null);
      localStorage.setItem("country", JSON.stringify(country));
      setWin(false);
      localStorage.setItem("win", 0);
      return;
    }
    if (timeLeft > 0 && country?.length == 22) {
      audio.play();
      setWin(true);
      localStorage.setItem("win", 1);
      Swal.fire({
        title: "مبروك الفوز",
        icon: "success",
        confirmButtonText: "اعادة",
        showCancelButton: true,
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeLeft(240);
          localStorage.setItem("timeLeft", 240);
          setCountry(null);
          localStorage.setItem("country", JSON.stringify(country));
          setWin(false);
          localStorage.setItem("win", 0);
        }
      });
      // End Swal

      setTimeLeft(0);
      localStorage.setItem("timeLeft", 0);
      setWin(true);
    }
  }, [timeLeft]);
};
