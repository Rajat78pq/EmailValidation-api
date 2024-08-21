import TempMailo from "./TempMailo";
import TempMail from "./TempMail";

export const OperationTemppmailo = async () => {
    try {
        const Email = await TempMailo();
        if (Email) {
            const domain = Email.split("@")[1];
            console.log("Domain:", domain);
            const data = JSON.stringify({ email: domain });
            const response = await fetch(`http://localhost:4000/api/disposalEmail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data
            })
            console.log(response.status);
            console.log("Fetched email From Temp Mailo:", data);
        } else {
            console.log("Email not found");
        }
    } catch (error) {
        console.error("Failed to fetch email:", error);
    }
}

export const OperationTemppmail = async () => {
    try {
        const Email = await TempMail();
        if (Email) {
            const domain = Email.split("@")[1];
            console.log("Domain:", domain);
            const data = JSON.stringify({ email: domain });
            const response = await fetch(`http://localhost:4000/api/disposalEmail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data
            })
            console.log(response.status);
            console.log("Fetched email from Temp Mail:", data);
        } else {
            console.log("Email not found");
        }
    } catch (error) {
        console.error("Failed to fetch email:", error);
    }
}