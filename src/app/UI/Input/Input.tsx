import classes from "./Input.module.scss"

export const Input = ({...props}) => {
    return (
        <div className={classes.inputWrapper}>
            <input type="text" className={classes.formControl} placeholder="Full name" {...props}/>
            <label htmlFor="input" className={classes.controlLabel}>Full name</label>
        </div>
    );
};
