import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {

    const { userAttr } = useContext(AuthContext);

    return(
        <>
        <h1>Hello World</h1>
        <a>{JSON.stringify(userAttr, null, 2)}</a>
        </>
    );
}
