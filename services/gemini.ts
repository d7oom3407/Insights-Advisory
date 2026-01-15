
import { GoogleGenAI } from "@google/genai";

// Always use named parameter and process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStrategicInsight = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a strategic business advisor for Insights Advisory. 
      Insights Advisory specializes in financial analysis, investment feasibility, portfolio management, real estate advisory, and market research across KSA, UAE, and Egypt.
      
      User query: ${query}
      
      Respond professionally, concisely, and provide a high-level strategic perspective. Always maintain a tone of excellence and expertise.`,
    });
    // Accessing .text property directly
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm unable to provide an insight at this moment. Please contact our human advisors for detailed assistance.";
  }
};
