import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ error: "JWT_SECRET não definido" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }

    (req as any).user = decoded;

    next();
  });
}