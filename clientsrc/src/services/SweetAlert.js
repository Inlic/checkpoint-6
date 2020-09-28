import Swal from "sweetalert2";

export default class SweetAlert {
  static async sweetDelete(title="Are you sure you want to delete this?", confirmButtonText="Yes, delete it!", text="This item will be gone.") {
    try {
      let res = await Swal.fire({
        title: title,
        text: text,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#ff0039",
        cancelButtonColor: "#3fb618",
        confirmButtonText: confirmButtonText,
      });
      if (res.value) {
        return true;
      }
    } catch (error) {}
  }

  static toast(title= "You did a thing", timer = 3000){
    Swal.fire({
      title: title,
      icon: "success",
      timer: timer,
      toast: true,
      position: "top-right",
      showConfirmButton: false
    })
  }
}