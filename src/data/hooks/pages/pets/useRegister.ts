import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/apiService";


export function useRegister() {
    const [name, setName] = useState(''),
        [story, setStory] = useState(''),
        [photo, setPhoto] = useState(''),
        [message, setMessage] = useState('')


    function registerIT() {
        if (validForm()) {
            ApiService.post('/pets', {
                name,
                story,
                photo,
            }).then(() => {
                clear();
                setMessage('Pet cadastrado com sucesso')
            }).catch((error: AxiosError) => {
                setMessage(error.response?.data.message);
            })

        } else {
            setMessage('Preencha todos os campos');
        }
    }

    function validForm() {
        return name.length > 2 && story.length > 20 && photo.length > 5;

    }

    function clear() {
        setName('');
        setStory('');
        setPhoto('');

    }

    return {
        name,
        setName,
        story,
        setStory,
        photo,
        setPhoto,
        message,
        setMessage,
        registerIT

    }

}