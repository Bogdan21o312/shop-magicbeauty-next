import {AdminDashboardLayouts} from "@/app/screens/AdminDashboard/layouts/AdminDashboardLayouts/AdminDashboardLayouts";
import {
    useDeleteUsersMutation,
    useGetUsersQuery
} from "@/app/screens/AdminDashboard/AdminDashboardUsers/modules/services/users.api";
import {useState} from "react";
import {formatDate, formatPhoneNumber} from "@/app/utils";
import classes from "./AdminDashboardUsers.module.scss"

export const AdminDashboardUsers = () => {
    const [limit, setLimit] = useState(20)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [isLoadingQuery, setIsLoadingQuery] = useState(false);
    const {data, isError, isLoading} = useGetUsersQuery({_limit: limit, _page: page, _search: search ?? ''}) // Provide default value for search
    const [deleteUsers, {error: errorDeleteUsers, isLoading: isLoadingUsers}] = useDeleteUsersMutation()

    const mainData = data?.data ?? [];
    return (
        <AdminDashboardLayouts>
            <div className={classes.table}>
                <div className={classes.thead}>
                <div className={classes.tr}>
                    <div className={`${classes.th} ${classes.num}`}>№</div>
                    <div className={`${classes.th} ${classes.email}`}>Адрес електроної адреси</div>
                    <div className={`${classes.th} ${classes.ban}`}>Бан</div>
                    <div className={`${classes.th} ${classes.name}`}>Імя</div>
                    <div className={`${classes.th} ${classes.surname}`}>Фамілія</div>
                    <div className={`${classes.th} ${classes.created_at}`}>Дата реєстрації</div>
                    <div className={`${classes.th} ${classes.version}`}>Версія</div>
                    <div className={`${classes.th} ${classes.phone_number}`}>Номер телефону</div>
                </div>
                </div>
                <div className={classes.tbody}>
                {[...mainData].reverse().map((user, index) => (
                    <div className={classes.tr} key={user._id}>
                        <div className={`${classes.td} ${classes.num}`}>{index + 1}</div>
                        <div className={`${classes.td} ${classes.email}`}>{user.email}</div>
                        <div className={`${classes.td} ${classes.ban}`}>{user.banned ? 'Так' : 'Ні'}</div>
                        <div className={`${classes.td} ${classes.name}`}>{user.name}</div>
                        <div className={`${classes.td} ${classes.surname}`}>{user.surname}</div>
                        <div className={`${classes.td} ${classes.created_at}`}>{formatDate(user.created_at || '')}</div>
                        <div className={`${classes.td} ${classes.version}`}>{user.__v + 1}</div>
                        <div className={`${classes.td} ${classes.phone_number}`}><a
                            href={`tel:${user.phone_number}`}>{formatPhoneNumber(user.phone_number || '')}</a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </AdminDashboardLayouts>
    );
};
