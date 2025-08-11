import { useState } from 'react';
import './App.css';

function App() {
    const [profissao, setProfissao] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [bio, setBio] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setBio('');

        const prompt = `Crie uma bio profissional para LinkedIn.
        Profissão: ${profissao}
        Experiência: ${experiencia}
        
        A bio deve ser concisa, impactante e destacar as principais habilidades.`;

        try {
            const response = await fetch('http://localhost:3000/generate-bio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error('Erro na resposta do servidor.');
            }

            const data = await response.json();
            setBio(data.bio);
        } catch (err) {
            setError('Desculpe, ocorreu um erro ao gerar a bio. Tente novamente mais tarde.');
            console.error('Erro:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Gerador de Bio para LinkedIn</h1>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="profissao">Sua profissão:</label>
                <input 
                    type="text" 
                    id="profissao" 
                    value={profissao}
                    onChange={(e) => setProfissao(e.target.value)}
                    required 
                />

                <label htmlFor="experiencia">Experiência (anos, principais projetos):</label>
                <textarea 
                    id="experiencia" 
                    rows="4" 
                    value={experiencia}
                    onChange={(e) => setExperiencia(e.target.value)}
                    required
                ></textarea>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Gerando...' : 'Gerar Bio'}
                </button>
            </form>
            
            {isLoading && <div className="loading">Gerando sua bio...</div>}
            
            {error && <div className="error">{error}</div>}
            
            {bio && (
                <div className="resultado">
                    <h2>Sua nova Bio:</h2>
                    <p className="bio-text">{bio}</p>
                </div>
            )}
        </div>
    );
}

export default App;