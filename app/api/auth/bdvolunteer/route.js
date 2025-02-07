import { NextResponse } from "next/server";
import connectMongo from "@/dbConnect/connectMongo";
import { authenticateRequest } from "@/utils/auth-utils";
import { bdUserModel } from "@/models/bd_users-model";


export const POST = async (request) => {
    try {
        const { error } = authenticateRequest(request);
        if (error) return error;

        const { userId, name, day, month, year, bloodGroup, religion, gender, skill, profession, institute, education, tshirtSize, phone, email, presentDivision, presentDistrict, presentUpazila, presentLocalAddress,  permanentDivision, permanentDistrict, permanentUpazila, permanentLocalAddress, fatherName, fatherPhone, fatherProfession, motherName, motherPhone, motherProfession, contactPersone, relationship, contactPersonePhone, experienc, availableDays, declaration } = await request.json();

        if (!userId || !name || !day || !month || !year || !bloodGroup || !gender || !skill || !profession || !education || !tshirtSize || !phone || !email || !presentDivision || !presentDistrict || !presentUpazila || !presentLocalAddress || !permanentDivision || !permanentDistrict || !permanentUpazila || !permanentLocalAddress || !fatherName || !fatherPhone || !fatherProfession || !motherName || !motherPhone || !motherProfession || !contactPersone || !relationship || !contactPersonePhone || !availableDays || !declaration) {
            return new NextResponse("Invalid or missing property", {
                status: 400,
            });
        }

        await connectMongo();

        const payload = {
            userId, name, day, month, year, bloodGroup, religion, gender, skill, profession, institute, education, tshirtSize, phone, email, presentDivision, presentDistrict, presentUpazila, presentLocalAddress,  permanentDivision, permanentDistrict, permanentUpazila, permanentLocalAddress, fatherName, fatherPhone, fatherProfession, motherName, motherPhone, motherProfession, contactPersone, relationship, contactPersonePhone, experienc, availableDays, declaration
        };

        const isVolunteer = await bdUserModel.findOne({
            userId: payload.userId,
            email: payload.email
        });
        if (!isVolunteer) {
            await bdUserModel.create(payload);

            return new NextResponse("Your all information has been stored", {
                status: 201,
            });
        } else {
            return new NextResponse("Already added in the database", {
                status: 409,
            });
        }
    } catch (err) {
        console.error("Error during the operation:", err);
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};