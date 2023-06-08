import { Router } from 'express';
import {
    addLocation,
    deleteLocation,
    getAllLocations,
} from '../controllers/locationController';

const router = Router();

// Get all locations
router.get('/', getAllLocations);

// Add a new location
router.post('/', addLocation);

// Delete a location by ID
router.delete('/:id', deleteLocation);

export default router;