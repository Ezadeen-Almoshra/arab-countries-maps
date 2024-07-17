import Swal from "sweetalert2";
const alert = (msg = "", type = "success",timer=1000) => {
  if (type === "warn") {
    Swal.fire({
      title: `<span className='!text-xl text-center '> ${msg} </span>`,
      timer: timer,
      icon: "warning",
      timerProgressBar: true,
    });
  } else if (type === "success") {
    Swal.fire({
      title: `<span className='!text-xl text-center'> ${msg} </span>`,
      timer: timer,
      icon: "success",
      timerProgressBar: true,
    });
  } else if (type === "error") {
    Swal.fire({
      title: `${msg}`,
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "استمرار",
      showCancelButton: false,
      showCloseButton: false,
    })
   
  } else if (type === "win") {
   
    console.log("win")
  }
};

export default alert;
