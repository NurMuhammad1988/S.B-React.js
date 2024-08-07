import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="text-center mt-5">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img
                        className="mb-2"
                        src={logo}
                        alt="logo"
                        width="72"
                        height="60"
                    />
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                    <Input
                        label={"Username"} //label
                        state={name} //value
                        setState={setName} //onChange e. target
                        // type default "text"
                    />

                    <Input
                        label={"Email address"} //label
                        type={"email"}
                        state={email} //value
                        setState={setEmail} //onChange e. target
                    />

                    <Input
                        label={"Password"} //label
                        type={"password"}
                        state={password}//value
                        setState={setPassword} //onChange e. target
                    />

                    <button
                        className="w-100 btn btn-primary mt-2"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Register;
