import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../../constants/http_status";


export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string;
    console.log("Token access: "+token)
    if(!token) return res.status(HTTP_UNAUTHORIZED).send();

    try {
        const decodedUser = verify(token, process.env.JWT_SECRET!);
        console.log("Token : "+token)
        console.log("The decodedUse is "+ decodedUser)
        console.log("process.env.JWT_SECRET: "+process.env.JWT_SECRET)
        req.user = decodedUser;

    } catch (error) {

        console.log("Token : "+token)
        console.log("The decodedUse is ")
        console.log("process.env.JWT_SECRET: "+process.env.JWT_SECRET)
        res.status(HTTP_UNAUTHORIZED).send();
    }

    return next();
}