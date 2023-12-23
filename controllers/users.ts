import { Express, Request, Response, NextFunction } from "express";
import prisma from "../db";

// Get all users from the database
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    // Get all users from the database using Prisma's findMany method
    const result = "Got all users."

    // Send the response with a 200 status code and the user data
    return res.status(200).json({
      response: result,
    });
};

export default { getUsers };
