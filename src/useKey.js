import { useEffect } from "react";

export function useKey(key, callBackFunc) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          callBackFunc?.();
        }
      }

      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [callBackFunc, key]
  );
}
