import { createClient } from "@supabase/supabase-js";
import React from "react";
import { StyledRegisterVideo } from "./styles";
import { useRouter } from "next/router";

function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (evento) => {
      const value = evento.target.value;
      const name = evento.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

const PROJECT_URL = "https://kbepchfnyekginxgukoi.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZXBjaGZueWVrZ2lueGd1a29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjQ1NjYsImV4cCI6MTk4Mzg0MDU2Nn0.ZzyQcGG0HS5MO3_oO8r1PCe10cWFsd9dW8yn4-nXYDA";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "" },
  });

  const [formVisivel, setFormVisivel] = React.useState(false);

  const router = useRouter();

  const [value, setValue] = React.useState();

  const refresh = () => {
    // it re-renders the component
    setValue({});
  };

  return (
    <StyledRegisterVideo>
      <button className='add-video' onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
            console.log(formCadastro.values);

            supabase
              .from("video")
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: "Geral",
              })
              .then((sucesso) => {
                if (sucesso) {
                }
                console.log(sucesso, "sucesso");
              })
              .catch((erro) => {
                console.log(erro, "ERRO");
              });

            setFormVisivel(false);
            formCadastro.clearForm();
          }}>
          <div>
            <button
              type='button'
              className='close-modal'
              onClick={() => setFormVisivel(false)}>
              X
            </button>
            <input
              placeholder='Título do vídeo'
              name='titulo'
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder='URL'
              name='url'
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type='submit' onClick={() => router.reload()}>
              Cadastrar
            </button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
