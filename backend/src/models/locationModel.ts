import { Document, model, Schema } from 'mongoose';

export interface Location extends Document {
    name: string;
    address: string;
}

const locationSchema = new Schema<Location>({
    name: { type: String, required: true },
    address: { type: String, required: true },
});

const LocationModel = model<Location>('Location', locationSchema);

export default LocationModel;