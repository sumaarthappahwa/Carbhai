
import { GoogleGenAI } from "@google/genai";

export const getCarCareAdvice = async (userQuery: string) => {
  try {
    // Initializing inside the function ensures the latest environment variables are captured
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert car detailing assistant for the brand "Carbhai". 
      The user is asking: "${userQuery}". 
      Respond concisely (max 3 sentences) about why professional cleaning (like Carbhai's services) helps solve their problem. 
      Available services include: Dry Cleaning, 3M Rubbing/Buffing, Foam Wash, Interior Polish.
      Be friendly and professional.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now, but professional car care is always a good idea for longevity!";
  }
};
