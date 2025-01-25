import mongoose, { Schema } from "mongoose";

const interUserSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    day: {
        required: true,
        type: Number
    },
    month: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: Number
    },
    bloodGroup: {
        required: true,
        type: String
    },
    religion: {
        required: false,
        type: String
    },
    gender: {
        required: true,
        type: String
    },
    skill: {
        required: true,
        type: String
    },
    profession: {
        required: true,
        type: String
    },
    institute: {
        required: false,
        type: String
    },
    education: {
        required: true,
        type: String
    },
    tshirtSize: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String
    },
    nationality: {
        required: true,
        type: String
    },
    passport: {
        required: true,
        type: String
    },
    presentAdress: {
        required: true,
        type: String
    },
    permanentAdress: {
        required: true,
        type: String
    },
    fatherName: {
        required: true,
        type: String
    },
    fatherPhone: {
        required: true,
        type: Number
    },
    fatherProfession: {
        required: true,
        type: String
    },
    motherName: {
        required: true,
        type: String
    },
    motherPhone: {
        required: true,
        type: Number
    },
    motherProfession: {
        required: true,
        type: String
    },
    contactPersone: {
        required: true,
        type: String
    },
    relationship: {
        required: true,
        type: String
    },
    contactPersonePhone: {
        required: true,
        type: Number
    },
    experienc: {
        required: false,
        type: String
    },
    availableDays: {
        required: true,
        type: String
    },
    picture: {
        required: true,
        type: String
    },
    signature: {
        required: true,
        type: String
    },
    pasportImage: {
        required: true,
        type: String
    },
    declaration: {
        required: true,
        type: String
    }
});

export const interUserModel = mongoose.models.inter_users ?? mongoose.model("inter_users", interUserSchema);