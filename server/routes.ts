import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertLeadSchema.parse(req.body);
      
      console.log("Lead submission:", validatedData);
      
      // Send data to Google Apps Script
      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzgpFHsQhQsjgnoodXEek2WjJqBH7OF0vG5geTwp3zld5q4Y_NvRYBj4lvJFIwii0T_MA/exec";
      
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData)
      });
      
      if (!response.ok) {
        throw new Error(`Google Apps Script responded with status: ${response.status}`);
      }
      
      const result = await response.text();
      console.log("Google Apps Script response:", result);
      
      res.json({ 
        success: true, 
        message: "Obrigado! Em breve um de nossos consultores vai entrar em contato com você via WhatsApp." 
      });
    } catch (error) {
      console.error("Lead submission error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos. Verifique os campos obrigatórios.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno. Tente novamente em alguns instantes." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
