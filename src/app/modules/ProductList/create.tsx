import React, { useState } from 'react';
import axios from 'axios';
import {useCreateGelPolishesKodiMutation, useGetGelPolishesKodiQuery} from "@/app/services/gel-polishes-kodi.api";

interface FormData {
    title: string;
    name: string;
    capacity: string;
    picture: File | null;
}

export  function Create() {
    const [createGelPolishesKodi, {error: createError, isLoading: isCreateLoading}] = useCreateGelPolishesKodiMutation()
    const [formData, setFormData] = useState<FormData>({
        title: '', name: '', capacity: '', picture: null,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, name, capacity, picture} = formData;

        if (!picture) return;

        const data = new FormData();
        data.append('title', title);
        data.append('name', name);
        data.append('capacity', capacity);
        data.append('picture', picture);

        try {
            const response = await axios.post('http://localhost:9422/api/V1/gel-polishes/gel-polishes-kodi/', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        if (name === 'picture') {
            const file = (e.target as HTMLInputElement).files?.[0]; // використання типу HTMLInputElement тут
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
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

            <label htmlFor="capacity">Capacity</label>
            <input type="text" id="capacity" name="capacity" value={formData.capacity} onChange={handleChange}/>

            <label htmlFor="picture">Picture</label>
            <input type="file" id="picture" name="picture" onChange={handleChange}/>

            <button type="submit">Submit</button>
        </form>
    );
}
