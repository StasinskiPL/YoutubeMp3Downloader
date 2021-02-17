import React, { createContext, useContext, useState } from "react";

interface ContextTypes {
  loading: boolean;
  similarVideos: any[];
  videoInfo: { [key: string]: any } | null;
  reset: ()=> void,
  setLoading: (u: React.SetStateAction<boolean>) => void;
  setSimilarVideos: (u: React.SetStateAction<any[]>) => void;
  setVideoInfo: (
    u: React.SetStateAction<{ [key: string]: any } | null>
  ) => void;
}

const initalState: ContextTypes = {
  loading: false,
  similarVideos: [],
  videoInfo: null,
  setLoading: () => void 0,
  setSimilarVideos: () => void 0,
  setVideoInfo: () => void 0,
  reset: () => void 0,
};

const Context = createContext(initalState);

const AppContext: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [similarVideos, setSimilarVideos] = useState<any[]>([]);
  const [videoInfo, setVideoInfo] = useState<{ [key: string]: any } | null>(
    null
  );

  const reset = () => {
    setSimilarVideos([]);
    setVideoInfo(null);
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        similarVideos,
        setSimilarVideos,
        videoInfo,
        setVideoInfo,
        reset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);

export default AppContext;
