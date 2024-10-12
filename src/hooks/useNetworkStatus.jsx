import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useNetworkStatus() {
  useEffect(() => {
    function handleOnline() {
      toast.dismiss();
      toast.success("Connection restored");
    }

    function handleOffline() {
      toast.error("Connection lost, application is offline", {
        draggable: false,
        autoClose: false,
        closeButton: false,
      });
    }

    if (!navigator.onLine) {
      handleOffline();
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
}
