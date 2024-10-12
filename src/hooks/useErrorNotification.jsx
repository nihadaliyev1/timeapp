import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useErrorNotification(...errors) {
  useEffect(() => {
    if (errors.length > 0) {
      errors.forEach((err) => {
        toast.error(err?.message);
      });
    }
  }, [errors]);
}
