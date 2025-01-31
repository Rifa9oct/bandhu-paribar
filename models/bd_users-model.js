import mongoose, { Schema } from "mongoose";

const bdUserSchema = new Schema({
    userId: {
        required: true,
        type: ObjectId
    },
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
    presentDivision: {
        required: true,
        type: String
    },
    presentDistrict: {
        required: true,
        type: String
    },
    presentUpazila: {
        required: true,
        type: String
    },
    presentLocalAddress: {
        required: true,
        type: String
    },
    permanentDivision: {
        required: true,
        type: String
    },
    permanentDistrict: {
        required: true,
        type: String
    },
    permanentUpazila: {
        required: true,
        type: String
    },
    permanentLocalAddress: {
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
    // picture: {
    //     required: true,
    //     type: String
    // },
    // signature: {
    //     required: true,
    //     type: String
    // },
    declaration: {
        required: true,
        type: String
    }
});

export const bdUserModel = mongoose.models.bd_users ?? mongoose.model("bd_users", bdUserSchema);