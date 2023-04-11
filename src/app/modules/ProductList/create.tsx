import {useCreateGelPolishesKodiMutation} from "@/app/services/gel-polishes-kodi.api";
import {useState} from "react";
import {useRouter} from "next/router";

export function Create() {
    const [formData, setFormData] = useState({
        title: "",
        name: "",
        capacity: "",
        picture: null,
    });

    const [createGelPolishesKodi, {
        error: createError,
        isLoading: isCreateLoading
    }] = useCreateGelPolishesKodiMutation();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const {title, name, capacity, picture} = formData;

        if (!picture) return;

        const data = new FormData();
        data.append("title", title);
        data.append("name", name);
        data.append("capacity", capacity);
        data.append("picture", picture);

        // @ts-ignore
        createGelPolishesKodi(data)
    };

    const handleChange = (e: any) => {
        const {name, value} = e.target;

        if (name === "picture") {
            const file = e.target.files?.[0]; // використання операції зіткнення null тут
            setFormData({
                ...formData,
                [name]: file || null, // якщо файлу немає, то встановлюємо властивість picture в null
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />

            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="capacity">Capacity</label>
            <input
                type="text"
                id="capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
            />

            <label htmlFor="picture">Picture</label>
            <input type="file" id="picture" name="picture" onChange={handleChange}/>

            <button type="submit" disabled={isCreateLoading}>
                {isCreateLoading ? "Loading..." : "Submit"}
            </button>
        </form>
    );
}
