import React from "react";
import type DIContainer from "@/src/core/domain/model/DIContainer";
import diContainer from "@/src/core/domain/di/diContainer";

const DIContext = React.createContext<DIContainer>(diContainer)

export default DIContext
