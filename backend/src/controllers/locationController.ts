import { Request, Response } from 'express';
import LocationModel from '../models/locationModel';

// Get all locations
export const getAllLocations = async (_req: Request, res: Response) => {
    try {
        const locations = await LocationModel.find();
        res.json(locations);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Add a new location
export const addLocation = async (req: Request, res: Response) => {
    const { name, address } = req.body;
    try {
        const newLocation = await LocationModel.create({ name: name, address: address });
        res.json(newLocation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a location by ID
export const deleteLocation = async (req: Request, res: Response) => {
    const locationId = req.params.id;

    try {
        const deletedLocation = await LocationModel.findByIdAndRemove(locationId);
        if (!deletedLocation) {
            res.status(404).json({ error: 'Location not found' });
        } else {
            res.json({ message: 'Location deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};