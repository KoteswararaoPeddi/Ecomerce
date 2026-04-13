import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AppContextType = {
    navigate: ReturnType<typeof useNavigate>;
    user: any;
    setUser: (user: any) => void;
    isSeller: boolean;
    setIsSeller: (isSeller: boolean) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)

    const value = {navigate, user,setUser, isSeller, setIsSeller }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }

    return context;
}