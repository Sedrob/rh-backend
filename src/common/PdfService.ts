import { NotFoundException } from "@nestjs/common";
import { jsPDF } from 'jspdf';
import autoTable from "jspdf-autotable";

export class PdfService
{
    private readonly doc: jsPDF;
    
    constructor() {
        this.doc = new jsPDF({orientation: 'p'})
    }
    
    generatePfgFile(data: any): ArrayBuffer
    {
        const arraysData = data["Result"];
        const flattedData = arraysData.flat(1)
        
        const datesInfo = []

        flattedData.forEach(dateInfo => {
            
            const result = datesInfo.find(obj => obj.Date === dateInfo.Date);
            if (result === undefined)
            {
                datesInfo.push(dateInfo);
                return;
            }
            Object.keys(dateInfo).forEach(key => {
                result[key] = dateInfo[key]
            })
        })
        
        if (datesInfo.length == 0)
        {
            throw new NotFoundException("Data not found")
        }
        
        const columns = Object.keys(datesInfo[0])
        
        const rows = datesInfo.map(dateInfo => Object.values(dateInfo).map(k => k.toString()))
        
        autoTable(this.doc, {
            head: [columns],
            body: rows
        })

        return this.doc.output('arraybuffer')
    }
}