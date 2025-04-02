import { useContext } from "react";
import { StockContext } from "../StockContext";

export default function useStock(){
    return useContext(StockContext)
}