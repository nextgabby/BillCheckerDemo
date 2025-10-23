import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateGiftRecommendation, getProductSuggestions } from "./grok";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/product-suggestions", async (req, res) => {
    try {
      const { recipient, budget } = req.body;

      if (!recipient) {
        return res.status(400).json({ error: "Recipient is required" });
      }

      if (!budget) {
        return res.status(400).json({ error: "Budget is required" });
      }

      const products = await getProductSuggestions(recipient, budget);
      res.json({ products });
    } catch (error) {
      console.error("Error getting product suggestions:", error);
      res.status(500).json({ error: "Failed to get product suggestions" });
    }
  });

  app.post("/api/generate-recommendation", async (req, res) => {
    try {
      const { recipient, budget, productName, productPrice } = req.body;

      if (!recipient) {
        return res.status(400).json({ error: "Recipient is required" });
      }

      if (!budget) {
        return res.status(400).json({ error: "Budget is required" });
      }

      if (!productName || !productPrice) {
        return res.status(400).json({ error: "Product details are required" });
      }

      const recommendation = await generateGiftRecommendation(recipient, budget, productName, productPrice);
      res.json({ recommendation });
    } catch (error) {
      console.error("Error generating recommendation:", error);
      res.status(500).json({ error: "Failed to generate recommendation" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
