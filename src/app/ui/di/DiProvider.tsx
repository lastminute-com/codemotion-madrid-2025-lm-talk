import React, {useEffect} from "react";
import DIContext from "@/src/core/ui/di/DIContext";
import diContainer from "@/src/core/domain/di/diContainer";
import '@/src/app/ui/di/setup'

const DiProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <DIContext.Provider value={diContainer}>
      {children}
    </DIContext.Provider>
  )
}

export default DiProvider
