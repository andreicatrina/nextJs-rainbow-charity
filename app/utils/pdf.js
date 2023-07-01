import { PDFDocument as PDFDocumentLib } from 'pdf-lib';
import fs from "fs";

export class PdfGenerator {
  static async generateContract() {
    const jsonDirectory = process.cwd();
    const pdfFile = fs.readFileSync(jsonDirectory + '/public/contract-sponsorizare.pdf');
    const pdfDoc = await PDFDocumentLib.load(pdfFile)
    const pages = pdfDoc.getPages()
    pages[0].drawText("HELLLOOOOOOOO", {
      x: 72,
      y: 350,
      size: 9,
    })
    const pdfBytes = await pdfDoc.save()
    return pdfBytes;
  }

  static async fillContract() {
    
  } 
}