import { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCSRF } from "./Tokens";

const NetworkContext = createContext({});

const NetworkProvider = ({ children }) => {
    const [network, setNetworkState] = useState({
        csrf: null
    });

    const getNetworkState = async () => {
        try {
            try {
                const csrfDataString = await AsyncStorage.getItem("net");
                const csrfData = JSON.parse(csrfDataString || {});
                if( csrfData.csrf ){
                    setNetwork({
                        csrf: csrfData.csrf
                    });
                } else {
                    throw new Error("no csrf exists");
                }
            } catch ( e ){
                const csrf = await getCSRF();
                if(csrf){
                    setNetworkState({
                        csrf: csrf
                    });
                } else {
                    throw new Error("Error while getting CSRFToken : token null");
                }
            }
        } catch (err){
            console.error(err);
            setNetworkState({
                csrf: null
            });
        }
    };

    const setNetwork = async (net) => {
        try {
            await AsyncStorage.setItem("net", JSON.stringify(net));
            setNetworkState(net);
        } catch (err){
            Promise.reject(err);
        }
    }

    useEffect(() => {
        getNetworkState();
    }, []);

    return(
        <NetworkContext.Provider value={{ network, setNetwork }}>
            {children}
        </NetworkContext.Provider>
    );
}

export { NetworkContext, NetworkProvider };