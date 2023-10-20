import { Request, Response } from "express";
import cat from "../models/cat.model";
import mongoose from 'mongoose';
export default class TutorialController {
  async create(req: Request, res: Response) {
    const kitty = await cat.create({ name: 'Zildjian' });
    kitty.save().then(() => console.log('saved'));
  }

  async findAll(req: Request, res: Response) {
    const catData = await cat.find({}).exec();
    res.send(catData);
  }

  async findOne(req: Request, res: Response) {
    const catData = await cat.findOne({ "_id": new mongoose.Types.ObjectId(req.params.id) }).exec();
    res.send(catData);
  }

  async update(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "update OK",
        reqParamId: req.params.id,
        reqBody: req.body
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "delete OK",
        reqParamId: req.params.id
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
}
