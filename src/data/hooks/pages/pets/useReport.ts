import { useState, useEffect } from "react";
import { Report } from "../../../@types/report";
import { ApiService } from "../../../services/apiService";

export function useReport(){
    const [listReport, setListReport] = useState<Report[]>([]);

    useEffect(()=>{
        ApiService.get('/adocoes').then((res)=>{
            setListReport(res.data);
        })
    }, [])

    return {
        listReport
    }
}
