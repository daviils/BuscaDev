import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }){

    const [ github_username, setGithub_username ] = useState('');
    const [ techs, setTechs ] = useState('');
    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitudo ] = useState('');

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitudo(longitude);
    
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        )
    
      },[]);

     async function handleSubmit(e){
          e.preventDefault();


        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
          });

          setGithub_username('');
          setTechs('');
      }

    return(
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
            name="github_username" 
            id="username_github" 
            required value={github_username}
            onChange={e => setGithub_username(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            required value={techs}
            onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="Latitude">Latitude</label>
              <input 
              type="Number"
              name="Latitude"
              id="Latitude"
              required value={latitude}
              onChange={e => setLatitude(e.target.value)}/*forma no react para armazenar o valor do no estado*/                 
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">longitude</label>
              <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required value={longitude}
              onChange={e => setLongitudo(e.target.value)}
              />
            </div>

          </div>
          <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;