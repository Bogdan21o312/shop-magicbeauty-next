import classes from "./Page404.module.scss"
import {Text} from "@/app/UI";
import {Slider} from "@/app/screens/Home/modules";
import {LayoutMain} from "@/app/layouts";

export const Page404 = () => {
    return (
        <LayoutMain>
            <div className={classes.main}>
                <div className={classes.body}>
                    <div className={classes.title}>404</div>
                    <div className={classes.blockText}>
                        <Text title>Упс! Сторінку незнайдено.</Text>
                        <Text subTitle>Упс! Сторінку незнайдено.</Text>
                    </div>
                </div>
                <Slider title={'Title1'} link={'/'} linkText={'побачити ще'} action={false}/>
            </div>
        </LayoutMain>
    );
};
