import { ChangeEvent, useState } from "react";

type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({ onAdd }: Props) => {

    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');
    const [alertRequired, setAlertRequired] = useState('');

    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText( e.target.value )
    }

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText( e.target.value )
    }

    const handlePostClick = () => {
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
            setAlertRequired('Post adicionado com sucesso!')
        } else {
            setAlertRequired('Prencha os campos!')
        }
    }

    return (
        <fieldset style={{ display: 'flex', flexDirection: 'column', width: '400px', gap: '1rem' }}>
        <legend>Adicionar novo post</legend>

        <input 
          type="text" 
          placeholder="Digite o tutulo" 
          value={addTitleText} 
          onChange={handleAddTitleChange}
        />
        <textarea 
          value={addBodyText}
          onChange={handleAddBodyChange}
        ></textarea>
        <span style={{ color: '#F00' }}>{alertRequired}</span>

        <button onClick={handlePostClick}>Adicionar</button>
      </fieldset>
    )
}