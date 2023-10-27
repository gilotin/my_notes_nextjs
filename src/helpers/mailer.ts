import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";

export async function sendEmail({ email, emailType, userId }: any) {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 300000,
            });
        }

        if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 300000,
            });
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "445b1425fcd0cb",
                pass: "a93ff07e3485c4",
                // TODO: add this credentials to .env file
            },
        });

        const mailOptions = {
            from: "notebook_app@test.com", //fake test email.
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email." : "Reset your password.",
            html: `<p>Click <a href="${
                process.env.domain
            }/verifyEmail?token=${hashedToken}">here</a> to ${
                emailType === "VERIFY" ? "verify your email." : "reset your password"
            } or copy and paste the link below in your browser. </br> ${
                process.env.domain
            }/verifyEmail?token=${hashedToken} </p>`,
        };

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
    } catch (error: any) {
        throw new Error(error.massage);
    }
}

`<p> Click<a href="">here to ""</a></p>`;
