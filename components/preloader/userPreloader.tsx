"use client";

import { useRef } from "react";
import { store } from "@/store";
import { ICredentials} from "@/types/types";
import { setCredentials, userState } from "@/store/slice/userSlice";

function UserPreloader(data:ICredentials){
      const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setCredentials(data));
    loaded.current = true;
  }

  return null;
}
export default UserPreloader;