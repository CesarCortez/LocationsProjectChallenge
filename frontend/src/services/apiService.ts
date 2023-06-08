import axios from 'axios';
import { Location } from '../types';

export const getLocations = () => axios.get<Location[]>(`/api/locations`);

export const addLocation = (location: Location) =>
    axios.post<Location>(`api/locations`, location);

export const deleteLocation = (id: string) =>
    axios.delete(`api/locations/${id}`);