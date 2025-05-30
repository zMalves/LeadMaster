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
      
      // In a real implementation, this would save to Google Sheets via Google Apps Script
      // For now, we'll just log the data and return success
      console.log("Lead submission:", validatedData);
      
      // Here you would integrate with Google Apps Script:
      // const response = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(validatedData)
      // });
      
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
