import {createContext, useContext, useEffect, useState} from "react";
import {fakeFetchCrypto, fetchAssets} from "../api.js";
import {percentDifference} from '../helpers.js';

const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false
})
export function CryptoContextProvider({children}){
    const [loading, setLoading] = useState(true);
    const [crypto, setCrypto] = useState([]);
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        async function preload() {
            setLoading(true);
            const {result} = await fakeFetchCrypto();
            const assets = await fetchAssets();
            setCrypto(result);
            setAssets(assets.map(asset => {
                const coin = result.find(c => c.id === asset.id)
                return {
                    grow: asset.price < coin.price,
                    growPercent: percentDifference(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                    ...asset
                }
            }));
            setLoading(false);
        }

        preload();
    }, []);
    return <CryptoContext.Provider value={{loading, crypto, assets}}>{children}</CryptoContext.Provider>
}
export default CryptoContext;

export function useCrypto(){
    return useContext(CryptoContext);
}