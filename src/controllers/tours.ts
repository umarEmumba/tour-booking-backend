import { Request, Response } from "express";
import Tour from "../models/tour";
import Booking from "../models/booking";

export const addTour = async (req: Request, res: Response) => {
  const tour = req.body;
  const newTour = new Tour(tour);

  try {
    await newTour.save();

    res.status(201).json(newTour);
  } catch (error: any) {
    res.status(409).json({ meesage: error.meesage });
  }
};

export const getTours = async (req: Request, res: Response) => {
  try {
    const tours = await Tour.find(req.query);

    res.status(200).json(tours);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTour = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTour = await Tour.findByIdAndRemove(id);
    if (deletedTour?.userEmail) {
      await Booking.deleteMany({
        $and: [
          { tourId: deletedTour.id },
          { userEmail: deletedTour?.userEmail },
        ],
      });
    }
    res.json({ message: "Tour deleted successfully!" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
