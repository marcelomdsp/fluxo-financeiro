import AuthRoutes from "./RootStack";
import { UseAuth } from "../Contexts/Auth";
import AppRoutes from "./AppStack";


export default function Routes() {
 //const { user } = UseAuth();
 const user = true

    return user ? <AppRoutes /> : <AuthRoutes /> 
    
}