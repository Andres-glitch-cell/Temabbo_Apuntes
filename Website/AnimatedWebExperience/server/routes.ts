import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Save contact to database
      const contact = await storage.createContact(validatedData);
      console.log("Contact saved to database:", contact);
      
      res.json({ 
        message: "Mensaje enviado correctamente",
        success: true,
        contact: contact
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Datos inválidos",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        message: "Error interno del servidor"
      });
    }
  });

  // Get all contacts endpoint
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({
        message: "Error al obtener contactos"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
