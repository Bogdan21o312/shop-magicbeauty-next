import { useEffect, useState } from "react";

type Values = {
    [key: string]: string;
};

type Errors = {
    [key: string]: string;
};

type Rules = {
    [key: string]: (value: string) => boolean;
};

export const useFormValidation = () => {
    const [values, setValues] = useState<Values>({
        email: "",
        password: "",
        firstName: "",
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Define validation rules for each field
    const rules: Rules = {
        email: (value: string) => /\S+@\S+\.\S+/.test(value),
        password: (value: string) =>
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,200}$/.test(value),
        firstName: (value: string) => /^[A-Za-z\s]+$/.test(value),
    };

    // Define error messages for each field
    const errorMessages = {
        email: "Please enter a valid email address",
        password: "Password must contain at least one uppercase letter, one lowercase letter, one number, and be between 8 and 200 characters",
        firstName: "Please enter a valid first name",
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const isValid = rules[name](value);

        let errorMsg = "";
        if (!isValid) {
            if (!value) {
                errorMsg = `${name} is required`;
            } else if (value.length > 200) {
                errorMsg = `${name} cannot be more than 200 characters`;
            } else if (name === "password") {
                errorMsg = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
            } else {
                errorMsg = errorMessages[name];
            }
        }

        setErrors({
            ...errors,
            [name]: errorMsg,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("LoginForm submitted");
    };

    // Disable submit button if there are any errors or if any required fields are empty
    const checkIsDisabled = () => {
        for (const key in values) {
            if (rules[key](values[key]) === false) {
                setIsDisabled(true);
                return;
            }
        }

        setIsDisabled(Object.values(errors).some((error) => error !== ""));
    };

    // Check if the form is disabled every time the values or errors change
    // This ensures that the submit button is always up to date
    // even if the user clicks on a field and then clicks outside of it
    useEffect(() => {
        checkIsDisabled();
    }, [values, errors]);

    return {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        isDisabled,
        showPassword,
        setShowPassword,
    };
};
