import { PdfGenerator } from "../../utils/pdf";

export async function GET() {
    const pdf = await PdfGenerator.generateContract()

    return new Response(pdf);
  }