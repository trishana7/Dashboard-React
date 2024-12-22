import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface ErrorModalParams {
  imageUrl: string;
  errorTitle: string;
  errorMessage: string;
  customTitleClass: string;
}

export const showErrorModal = ({
  imageUrl,
  errorTitle,
  errorMessage,
  customTitleClass,
}: ErrorModalParams) => {
  Swal.fire({
    imageUrl,
    title: errorTitle,
    text: errorMessage,
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
      title: customTitleClass,
    },
  });
};
