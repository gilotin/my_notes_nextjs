import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"; // <- may cause a problem
import { sendEmail } from "@/helpers/mailer";

connect();

export async function GET(request: NextRequest) {
    console.log("Under construction");
    return NextResponse.json({ message: "Under construction" });
}
